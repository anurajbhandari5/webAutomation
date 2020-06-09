let puppeteer = require("puppeteer");
let fs = require("fs");
let credentialsFile = process.argv[2];
(async function () {
    let data = await fs.promises.readFile(credentialsFile, "utf-8");
    let credentials1 = JSON.parse(data);
    login = credentials1.url;
    email = credentials1.email;
    pwd = credentials1.pwd;
    Fname=credentials1.Fname;
    Lname=credentials1.Lname;
    add=credentials1.add;
    city=credentials1.city;
    pin=credentials1.pin;
    phone=credentials1.phone;
    Emp=credentials1.Emp;
    job=credentials1.job;
    col=credentials1.College;
    fos=credentials1.FOS;
    s1=credentials1.skill1;
    s2=credentials1.skill2;
    s3=credentials1.skill3;
    my=credentials1.myself;
    // starts browser
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized", "--incognito"]
    });
    // creates an empty page
    // await browser.newPage();
    // returns array of curently open tab
    let numberofPages = await browser.pages();
    let tab = numberofPages[0];
    // goto page
    // 1. 
    await tab.goto(login, {
        waitUntil: "networkidle2"
        
    });
     //wait for element
     await tab.waitForSelector("#user_email");
     await tab.type("#user_email", email, { delay: 100 });
     // console.log("Email entered");
     await tab.waitForSelector("#user_password");
     await tab.type("#user_password", pwd, { delay: 100 });
     await tab.waitForSelector(".is-block.btn");
     await navigationHelper(tab,".is-block.btn");
     await tab.waitForSelector(".btn--xlarge");
     await navigationHelper(tab,".btn--xlarge");
     await tab.waitForSelector("a[href='https://resumebuild.com/resume/choose_templates/new']");
     await navigationHelper(tab,"a[href='https://resumebuild.com/resume/choose_templates/new']");
     await tab.waitForSelector(".template-file__image:hover .btn-primary");
     await navigationHelper(tab,".template-file__image:hover .btn-primary");
     await tab.waitForSelector("#heading_name");
     await tab.type("#heading_name", Fname, { delay: 100 });
     await tab.waitForSelector("#heading_last_name");
     await tab.type("#heading_last_name", Lname, { delay: 100 });
     await tab.waitForSelector("#heading_address");
     await tab.type("#heading_address", add, { delay: 100 });
     await tab.waitForSelector("#heading_city");
     await tab.type("#heading_city", city, { delay: 100 });
     await tab.waitForSelector("#heading_zipcode");
     await tab.type("#heading_zipcode", pin, { delay: 100 });
     await tab.waitForSelector("#heading_email");
     await tab.type("#heading_email", email, { delay: 100 });
     await tab.waitForSelector("#heading_phone");
     await tab.type("#heading_phone", phone, { delay: 100 });
     
     await tab.waitForSelector("#save-button");
     await navigationHelper(tab,"#save-button");
     

     await tab.waitForSelector("a[id='save-button']");
     await navigationHelper(tab,"a[id='save-button']");
     await tab.waitForSelector("#experience_employer");
     await tab.type("#experience_employer",Emp , { delay: 100 });
     await tab.waitForSelector("#experience_job_title");
     await tab.type("#experience_job_title", job, { delay: 100 });
     await tab.waitForSelector("#experience_city");
     await tab.type("#experience_city",city, { delay: 100 });
     await tab.waitForSelector("#experience_state");
     await tab.type("#experience_state",city, { delay: 100 });
     await tab.waitForSelector("#item-save");
     await navigationHelper(tab,"#item-save");

     
     //await tab.waitForSelector("a[id='save-button']");
     //await tab.waitFor(3000);
     await tab.keyboard.type('\n');
     //await navigationHelper(tab,"a[id='save-button']");
    
     
     //await tab.waitForSelector(".btn-primary");
    // await navigationHelper(tab,".btn-primary");
     await tab.waitForSelector("#education_school_name");
     await tab.type("#education_school_name",col, { delay: 100 });
     await tab.waitForSelector("#education_city");
     await tab.type("#education_city",city, { delay: 100 });
     await tab.waitForSelector("#education_state");
     await tab.type("#education_state",city, { delay: 100 });
     await tab.waitForSelector("#education_field_of_study");
     await tab.type("#education_field_of_study",fos, { delay: 100 });
     await tab.waitForSelector("#item-save");
     await navigationHelper(tab,"#item-save");
     await tab.waitForSelector("#save-button");
     await navigationHelper(tab,"#save-button");
    // await tab.waitForSelector("#save-button");
    // await navigationHelper(tab,"#save-button");
    await tab.keyboard.type('\n');
     await tab.waitForSelector("#resume_skills_attributes_0_content");
     await tab.type("#resume_skills_attributes_0_content",s1, { delay: 100 });
     await tab.waitForSelector("#resume_skills_attributes_1_content");
     await tab.type("#resume_skills_attributes_1_content",s2, { delay: 100 });
     await tab.waitForSelector("#resume_skills_attributes_2_content");
     await tab.type("#resume_skills_attributes_2_content",s3, { delay: 100 });
     await tab.waitForSelector(".btn-primary");
     await navigationHelper(tab,".btn-primary");
     //await tab.waitForSelector("#save-button");
     //await navigationHelper(tab,"#save-button");
     await tab.keyboard.type('\n');
     await tab.waitForSelector("#resume_summary_attributes_content");
     await tab.type("#resume_summary_attributes_content",my, { delay: 100 });
     await tab.waitForSelector("#item-save");
     await navigationHelper(tab,"#item-save");





    // await Promise.all([manageTabs[1].click(), tab.waitForNavigation({
      //  waitUntil: "networkidle2"
    //})])
})()
async function navigationHelper(tab, selector) {
    await Promise.all([tab.waitForNavigation({
     
        waitUntil: "networkidle2"
    }), tab.click(selector)]);
}