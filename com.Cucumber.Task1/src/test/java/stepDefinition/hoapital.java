package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class hoapital {
	public static Select dropdown;
	public static WebDriver driver;
	@Given("^Open chrome browser and Start Applciation$")
	public void open_chrome_browser_and_Start_Applciation() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://localhost/Hospital/");
		driver.manage().timeouts().implicitlyWait(3000,TimeUnit.SECONDS);
	}

	@When("^Selecting \"([^\"]*)\" and I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void selecting_and_I_enter_valid_and_valid(String module, String username, String password) throws Throwable {
		dropdown = new Select(driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/select[1]")));
		dropdown.selectByVisibleText(module);
		WebElement username1 =driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/input[1]"));
		username1.clear();
		username1.sendKeys(username);

		WebElement password1=driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[4]/input[1]"));
		password1.clear();
		password1.sendKeys(password);

	}

	@Then("^Click on login$")
	public void click_on_login() throws Throwable {
		WebElement click=driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/form[1]/div[5]/button[1]"));
		click.click();
	}

	@Then("^veryfy title$")
	public void veryfy_title() throws Throwable {
Assert.assertEquals("admin dashboard | FPS Hospital Management System", driver.getTitle());
	}

	@Then("^verify dashboard title$")
	public void verify_dashboard_title() throws Throwable {
		Assert.assertEquals("doctor dashboard | FPS Hospital Management System", driver.getTitle()); 
	}

	@Then("^add patient$")
	public void add_patient() throws Throwable {
		driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]")).click();
		Actions builder=new Actions(driver);
		WebElement addpatient = driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/div[1]/ul[1]/li[2]/a[1]"));
		builder.moveToElement(addpatient).click().perform();

		WebElement name = driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"));
		name.sendKeys("chetna1");
		WebElement email = driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/input[1]"));
		email.sendKeys("patient@patient.com");
		WebElement pswd = driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[1]/input[1]"));
		pswd.sendKeys("patient");
		WebElement address = driver.findElement(By.xpath("//input[@name='address']"));
		address.sendKeys("nashik");
		WebElement phone = driver.findElement(By.xpath("//input[@name='phone']"));
		phone.sendKeys("1234567890");
		dropdown = new Select(driver.findElement(By.xpath("//select[@name='sex']")));
		dropdown.selectByVisibleText("female");

		WebElement age = driver.findElement(By.xpath("//input[@name='age']"));
		age.sendKeys("24");
		dropdown = new Select(driver.findElement(By.xpath("//select[@name='blood_group']")));
		dropdown.selectByVisibleText("B+");
		WebElement addpatientbutton=driver.findElement(By.xpath("//button[@class='btn btn-blue']"));
		addpatientbutton.click();
	}

	@Then("^verify title of patient page$")
	public void verify_title_of_patient_page() throws Throwable {
		Assert.assertEquals("manage patient | FPS Hospital Management System", driver.getTitle());
	}

	@Then("^click on bed allotment$")
	public void click_on_bed_allotment() throws Throwable {
	   driver.findElement(By.xpath("/html[1]/body[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]")).click(); 

	
	}

}