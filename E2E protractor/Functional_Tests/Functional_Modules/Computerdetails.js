'use strict';
var compC = require('../Page/ComputerPageModel.js');
var baseUrl = browser.baseUrl;


describe('Computer details creating, retrieve, update and delete', function() {

    beforeEach(function(done) {
        browser.ignoreSynchronization = true;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
        browser.driver.manage().window().maximize();
        done();
    });

    it('create a computer with basic details ', function() {
        browser.get(baseUrl);
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return compC.getaddcomputer().isPresent()});
        browser.wait(function() {
            return compC.getsearchsubmit().isPresent()});
        compC.getaddcomputer().click();
        compC.getname().sendKeys("demo_kiran")
        compC.getcompany().sendKeys("Apple Inc.")
        compC.getsubmitforcreate().click();
        expect(compC.statusmessage.getText()).toEqual("Done! Computer demo_kiran has been created");

    });

    it('filter the computer details and validation of table headers and table data ', function() {
        browser.get(baseUrl);
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return compC.getaddcomputer().isPresent()});
        browser.wait(function() {
            return compC.getsearchsubmit().isPresent()});
        //filter and checking the computer details
        compC.getsearchbox().click().sendKeys("demo_kiran");
        compC.getsearchsubmit().click();
        expect(compC.computernumbermessage.getText()).toEqual("One computer found");
        //table header details
        var headers = element.all(by.css('table th')).map(function(elm) {
            return elm.getText();
        });
        expect(headers).toEqual([
            "Computer name",
            "Introduced",
            "Discontinued",
            "Company",
        ]);
        //Table data fetching
        var tabledata = element.all(by.css("table"));
        var rows = tabledata.all(by.tagName("tr"));
        var cells = rows.all(by.tagName("td"));
        expect(cells.get(0).getText()).toEqual("demo_kiran")
        expect(cells.get(1).getText()).toEqual("-")
        expect(cells.get(2).getText()).toEqual("-")
        expect(cells.get(3).getText()).toEqual("Apple Inc.")

    });

    it('filter the computer details, update the computer details and validation of table headers and table data ', function() {
        browser.get(baseUrl);
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return compC.getaddcomputer().isPresent()});
        browser.wait(function() {
            return compC.getsearchsubmit().isPresent()});
        //filter and checking the computer details
        compC.getsearchbox().click().sendKeys("demo_kiran");
        compC.getsearchsubmit().click();
        expect(compC.computernumbermessage.getText()).toEqual("One computer found");
        //table header details
        var headers = element.all(by.css('table th')).map(function(elm) {
            return elm.getText();
        });
        expect(headers).toEqual([
            "Computer name",
            "Introduced",
            "Discontinued",
            "Company",
        ]);
        //Table data fetching
        var tabledata = element.all(by.css("table"));
        var rows = tabledata.all(by.tagName("tr"));
        var cells = rows.all(by.tagName("td"));
        expect(cells.get(0).getText()).toEqual("demo_kiran")
        expect(cells.get(1).getText()).toEqual("-")
        expect(cells.get(2).getText()).toEqual("-")
        expect(cells.get(3).getText()).toEqual("Apple Inc.")
        //updating computer details
        compC.getrowselection().click();
        compC.getname().clear();
        compC.getname().sendKeys("demo_kiran123");
        compC.getintroduced().sendKeys("2017-03-12");
        compC.getdiscontinued().sendKeys("2019-09-10");
        compC.getcompany().sendKeys("IBM");
        compC.getsubmitforcreate().click();
        expect(compC.statusmessage.getText()).toEqual("Done! Computer demo_kiran123 has been updated");
        //checking for updated comupter
        compC.getsearchbox().click().sendKeys("demo_kiran123");
        compC.getsearchsubmit().click();
        var tabledata = element.all(by.css("table"));
        var rows = tabledata.all(by.tagName("tr"));
        var cells = rows.all(by.tagName("td"));
        expect(cells.get(0).getText()).toEqual("demo_kiran123")
        expect(cells.get(1).getText()).toEqual("12 Mar 2017")
        expect(cells.get(2).getText()).toEqual("10 Sep 2019")
        expect(cells.get(3).getText()).toEqual("IBM")
    });

    it('filter the computer details, delete the udpated comupter ', function() {
        browser.get(baseUrl);
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return compC.getaddcomputer().isPresent()});
        browser.wait(function() {
            return compC.getsearchsubmit().isPresent()});
        //filter and checking the computer details
        //checking for updated comupter
        compC.getsearchbox().click().sendKeys("demo_kiran123");
        compC.getsearchsubmit().click();
        var tabledata = element.all(by.css("table"));
        var rows = tabledata.all(by.tagName("tr"));
        var cells = rows.all(by.tagName("td"));
        expect(cells.get(0).getText()).toEqual("demo_kiran123")
        expect(cells.get(1).getText()).toEqual("12 Mar 2017")
        expect(cells.get(2).getText()).toEqual("10 Sep 2019")
        expect(cells.get(3).getText()).toEqual("IBM")
        compC.getrowselection().click();
        compC.getdeletebutton().click();
        expect(compC.statusmessage.getText()).toEqual("Done! Computer has been deleted");


    });

});