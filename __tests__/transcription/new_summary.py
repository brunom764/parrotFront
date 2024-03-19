from selenium import webdriver
import time

driver = webdriver.Chrome() 
driver.get('http://localhost:8080/login')

#login
email_input = driver.find_element("name", "email")
password_input = driver.find_element("name","password")
login_button = driver.find_element("xpath",'//span[text()="Entrar"]')  

time.sleep(2)

#envio de dados de login
email_input.send_keys("teste@gmail.com")
password_input.send_keys("123456")
login_button.click()

time.sleep(5)

expected_url = 'http://localhost:8080/dashboard' # Checa se a url esperada é a url de dashboard, ou seja, foi redirecionado para a página de dashboard
current_url = driver.current_url

if current_url == expected_url:
    print("Login realizado com sucesso")
else:
    print("Erro ao realizar login")

nome_resumo_button = driver.find_element("xpath",'//span[text()="nova transcrição"]')  
nome_resumo_button.click()

time.sleep(2)

#criar novo resumo
nome_resumo_input = driver.find_element("xpath",'//input[@type="text"]')  
nome_resumo_input.send_keys("Entrevista do teste")

time.sleep(2)

#upar arquivo de audio
audio_input = driver.find_element("xpath", "//input[@type='file']")
if audio_input.is_displayed() and audio_input.is_enabled():
    audio_input.click()
else:
    print("O elemento de entrada de áudio não está visível ou não está habilitado.")

time.sleep(5)

audio_file_path = "/caminho/para/o/arquivo/audio.mp4"  # Substitua pelo caminho do arquivo de áudio no seu sistema
audio_input.send_keys(audio_file_path)

time.sleep(2)

#enviar arquivo de audio
enviar_button = driver.find_element("xpath",'//span[text()="Enviar"]')  
enviar_button.click()

time.sleep(30)
# Conclusão do teste
driver.quit()