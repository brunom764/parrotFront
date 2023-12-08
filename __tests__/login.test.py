from selenium import webdriver
import time

driver = webdriver.Chrome() 
driver.get("http://localhost:8080")  # Acessa a home pag

start_button = driver.find_element("xpath",'//span[text()="Começar"]') # Localiza botão de começar para ir para a página de login
start_button.click() # Clica no botão de começar

# Aguarde algum tempo (por exemplo, 2 segundos) para permitir que a ação seja concluída
time.sleep(2) 

expected_url = 'http://localhost:8080/login' # Checa se a url esperada é a url de login, ou seja, foi redirecionado para a página de login
current_url = driver.current_url

# Encontrar elementos na página usando seus names
email_input = driver.find_element("name", "email")
password_input = driver.find_element("name","password")

# Preencher campos de login
email_input.send_keys("teste@gmail.com")
password_input.send_keys("1234567")

time.sleep(2)

login_button = driver.find_element("xpath",'//span[text()="Entrar"]')  
login_button.click()

# Aguarde algum tempo (por exemplo, 2 segundos) para permitir que a ação seja concluída
time.sleep(2)


expected_url = 'http://localhost:8080/feed' # Verifica se o login foi concluído com sucesso, ou seja, se foi redirecionado para a página de feed.
# Caso contrário, o login falhou e não foi redirecionado para a página de feed, o email ou senha estão incorretos
current_url = driver.current_url

if expected_url in current_url:
    print("TESTE CONCLUIDO: Login bem-sucedido. Login com sucesso")
else:
    print("TESTE CONCLUIDO: Login falhou, usuário ou senha incorreto")

# Conclusão do teste
driver.quit()