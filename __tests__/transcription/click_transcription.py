from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Set up the Selenium driver
driver = webdriver.Chrome()

# Navigate to the login page
driver.get("https://example.com/login")

# Find the email and password input fields and enter the provided credentials
email_input = driver.find_element(By.ID, "email")
password_input = driver.find_element(By.ID, "password")
email_input.send_keys("teste@gmail.com")
password_input.send_keys("123456")

# Submit the login form
login_button = driver.find_element(By.ID, "login-button")
login_button.click()

# Wait for the transcription to load and click on it
transcription = WebDriverWait(driver, 10).until(
  EC.presence_of_element_located((By.CLASS_NAME, "transcription"))
)
transcription.click()

# Wait for the summary button to be clickable and click on it
summary_button = WebDriverWait(driver, 10).until(
  EC.element_to_be_clickable((By.ID, "summary-button"))
)
summary_button.click()

# Close the browser
driver.quit()