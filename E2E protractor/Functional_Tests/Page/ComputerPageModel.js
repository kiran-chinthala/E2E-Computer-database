
var ComputerPageModel = function () {
    //New
    var searchsubmit = element(by.xpath('//*[@id="searchsubmit"]'));
    var addcomputer  = element(by.xpath('//*[@id="add"]'));
    var searchbox  = element(by.xpath('//*[@id="searchbox"]'));
    var name  = element(by.xpath('//*[@id="name"]'));
    var introduced  = element(by.xpath('//*[@id="introduced"]'));
    var discontinued  = element(by.xpath('//*[@id="discontinued"]'));
    var company  = element(by.xpath('//*[@id="company"]'));
    var submitforcreate = element(by.xpath('//*[@id="main"]/form/div/input'));
    var cancelbutton = element(by.xpath('//*[@id="main"]/form/div/a'));
    this.computernumbermessage = element(by.xpath('//*[@id="main"]/h1'));
    var deletebutton = element(by.xpath('//*[@id="main"]/form[2]/input'));
    this.statusmessage = element(by.xpath('//*[@id="main"]/div[1]'));
    var rowselection = element(by.xpath('//*[@id="main"]/table/tbody/tr/td[1]/a'));

    this.getrowselection = function () {
        return rowselection;
    };

     this.getsearchsubmit = function () {
        return searchsubmit;
    };

    this.getaddcomputer = function () {
        return addcomputer;
    };

    this.getsearchbox = function () {
        return searchbox;
    };

    this.getname = function () {
        return name;
    };

    this.getintroduced = function () {
        return introduced;
    };

    this.getdiscontinued = function () {
        return discontinued;
    };

    this.getcompany = function () {
        return company;
    };

    this.getsubmitforcreate = function () {
        return submitforcreate;
    };

    this.getcancelbutton = function () {
        return cancelbutton;
    };

    this.getdeletebutton = function () {
        return deletebutton;
    };



};

module.exports = new ComputerPageModel();
