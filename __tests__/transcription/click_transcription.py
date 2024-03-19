from selenium import webdriver
import time
# Set up the Selenium driver
driver = webdriver.Chrome()

# Navigate to the login page
driver.get("http://localhost:8080/login")

# Find the email and password input fields and enter the provided credentials
#login
email_input = driver.find_element("name", "email")
password_input = driver.find_element("name","password")
login_button = driver.find_element("xpath",'//span[text()="Entrar"]')  

time.sleep(2)

#envio de dados de login
email_input.send_keys("glrbc@cin.ufpe.br")
password_input.send_keys("123456")
login_button.click()

time.sleep(5)

expected_url = 'http://localhost:8080/dashboard' # Checa se a url esperada é a url de dashboard, ou seja, foi redirecionado para a página de dashboard
current_url = driver.current_url

if current_url == expected_url:
    print("Login realizado com sucesso")
else:
    print("Erro ao realizar login")

# clica na transcrição teste
transcription = driver.find_element("xpath",'//span[text()="Entrevista do teste"]')  
transcription.click()

time.sleep(5)

# Wait for the summary button to be clickable and click on it
summary_button = driver.find_element("xpath",'//span[text()="Summary"]')  
summary_button.click()

time.sleep(10)
# Close the browser
driver.quit()