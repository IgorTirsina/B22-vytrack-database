package com.vytrack.step_definitions;

import com.vytrack.utilities.DBUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class DataBaseConnectionStepDef {
    static List<Object> myList;
    @Given("User connects to DB")
    public void user_connects_to_DB() {
        System.out.println("Connect to DB");
        String q = "select * from orocrm_contact";
        Assert.assertEquals(3, DBUtils.getCellValue(q));
    }

    @When("User sends the {string} request to DB")
    public void userSendsTheRequestToDB(String query) {
        myList = DBUtils.getRowList(query);
        System.out.println("myList = " + myList);
    }

    @Then("User should get the proper information")
    public void user_should_get_the_proper_information() {
        //582	Vanetta	Abshire
        Assert.assertEquals(582, myList.get(0));
        Assert.assertEquals("Vanetta", myList.get(1));
        Assert.assertEquals("Abshire", myList.get(2));

    }



}
