from selenium import webdriver
import time

driver = webdriver.Chrome() 
driver.get("http://localhost:8080/register")
register_button = driver.find_element("xpath", "//a[text()='Já tem uma conta? Faça login']")
register_button.click()

expected_url = "http://localhost:8080/login"
current_url = driver.current_url

if expected_url in current_url:
    print("TESTE CONCLUIDO: Encaminhado para pagina de e login")
else:
    print("TESTE CONCLUIDO: Algo de errado aconteceu")

time.sleep(5)
# Conclusão do teste
driver.quit()