package com.vytrack.step_definitions;

import com.vytrack.pages.*;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.DBUtils;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class ContactsStepDefs {

    @Given("the user logged in as {string}")
    public void the_user_logged_in_as(String userType) {
        //go to login page
        Driver.get().get(ConfigurationReader.get("url"));
        //based on input enter that user information
        String username =null;
        String password =null;

        if(userType.equals("driver")){
            username = ConfigurationReader.get("driver_username");
            password = ConfigurationReader.get("driver_password");
        }else if(userType.equals("sales_manager")){
            username = ConfigurationReader.get("sales_manager_username");
            password = ConfigurationReader.get("sales_manager_password");
        }else if(userType.equals("store_manager")){
            username = ConfigurationReader.get("store_manager_username");
            password = ConfigurationReader.get("store_manager_password");
        }
        //send username and password and login
        new LoginPage().login(username,password);
    }

    @Then("the user should see following options")
    public void the_user_should_see_following_options(List<String> menuOptions) {
        BrowserUtils.waitFor(5);
        List<String> actualOptions = BrowserUtils.getElementsText(new DashboardPage().menuOptions);

        Assert.assertEquals(menuOptions,actualOptions);
        System.out.println("menuOptions = " + menuOptions);
        System.out.println("actualOptions = " + actualOptions);
    }

    @When("the user logs in using following credentials")
    public void the_user_logs_in_using_following_credentials(Map<String,String> userInfo) {
        System.out.println(userInfo);
        //use map information to login and also verify firstname and lastname
        //login with map info
        new LoginPage().login(userInfo.get("username"),userInfo.get("password"));
        //verify firstname and lastname
        String actualName = new DashboardPage().getUserName();
        String expectedName = userInfo.get("firstname")+" "+ userInfo.get("lastname");

        Assert.assertEquals(expectedName,actualName);
        System.out.println("expectedName = " + expectedName);
        System.out.println("actualName = " + actualName);


    }


    @When("the user clicks the {string} from contacts")
    public void theUserClicksTheFromContacts(String email) {
        BrowserUtils.waitFor(3);
        //we have ready method to find email webelement in pom class
        //we just get the email from feature file and pass to that method and click it
        ContactsPage contactsPage = new ContactsPage();
        contactsPage.getContactEmail(email).click();
        BrowserUtils.waitFor(3);

    }

    @Then("the information should be same with database")
    public void theInformationShouldBeSameWithDatabase() {
        BrowserUtils.waitFor(3);

        ContactInfoPage contactInfoPage = new ContactInfoPage();
        String actualFullName = contactInfoPage.contactFullName.getText();
        String actualEmail = contactInfoPage.email.getText();
        System.out.println("actualEmail = " + actualEmail);
        System.out.println("actualFullName = " + actualFullName);

        String q = "select o.id, o.first_name, o.last_name, e.email \n" +
                "from (select id,first_name,last_name \n" +
                "from orocrm_contact \n" +
                "where first_name='Vanetta') o join orocrm_contact_email e\n" +
                "on o.id = e.owner_id\n" +
                "where e.email='"+actualEmail+"'";
        List<Object> contactList = DBUtils.getRowList(q);

        Assert.assertEquals("Contact ID is not as expected",582, contactList.get(0));
        Assert.assertEquals("Full name is not as expected",actualFullName, (contactList.get(1)+" "+contactList.get(2)));
        Assert.assertEquals("Email is not as expected",actualEmail, contactList.get(3));

    }
}
