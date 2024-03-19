from selenium import webdriver
import time

driver = webdriver.Chrome() 
driver.get("http://localhost:8080/login")

# teste de logout, primeiro, faz o login
email_input = driver.find_element("name", "email")
password_input = driver.find_element("name","password")
login_button = driver.find_element("xpath",'//span[text()="Entrar"]')  

time.sleep(2)

email_input.send_keys("teste@gmail.com")
password_input.send_keys("123456")

time.sleep(2)

login_button.click()

time.sleep(2)

expected_url = 'http://localhost:8080/dashboard'
current_url = driver.current_url

if expected_url in current_url:
    print("TESTE CONCLUIDO:Login bem-sucedido. Login com sucesso")
else:
    print("TESTE CONCLUIDO: Login falhou, usuário ou senha incorreto")

time.sleep(2)

register_button = driver.find_element("xpath", "//img[@alt='logout']")
register_button.click()

expected_url = "http://localhost:8080/login"
current_url = driver.current_url

if expected_url in current_url:
    print("TESTE CONCLUIDO: Encaminhado para página de login")
else:
    print("TESTE CONCLUIDO: Algo de errado aconteceu")

time.sleep(5)
# Conclusão do teste
driver.quit()