from selenium import webdriver
import time

driver = webdriver.Chrome() 
driver.get("http://localhost:8080/login")
register_button = driver.find_element("xpath", "//a[text()='Não tem uma conta? Cadastre-se']")
register_button.click()

expected_url = "http://localhost:8080/register"
current_url = driver.current_url

if expected_url in current_url:
    print("TESTE CONCLUIDO: Encaminhado para página de cadastro")
else:
    print("TESTE CONCLUIDO: Algo de errado aconteceu")

time.sleep(5)
# Conclusão do teste
driver.quit()