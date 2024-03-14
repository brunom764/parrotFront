from selenium import webdriver
import time

driver = webdriver.Chrome() 
driver.get('https://parrot-ruddy.vercel.app/')

#login
email_input = driver.find_element("name", "email")
password_input = driver.find_element("name","password")
login_button = driver.find_element("xpath",'//span[text()="Entrar"]')  

time.sleep(2)

#envio de dados de login
email_input.send_keys("teste@gmail.com")
password_input.send_keys("123456")

time.sleep(2)

login_button.click()

#criar novo resumo
nome_resumo_input = driver.find_element("xpath",'/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[1]/div/div[1]/div')  
nome_resumo_input.send_keys("Entrevista do teste")

time.sleep(2)

#upar arquivo de audio
audio_input = driver.find_element("xpath", '/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[2]/input')
audio_input.click()
audio_file_path = "/caminho/para/o/arquivo/audio.mp4"  # Substitua pelo caminho do arquivo de áudio no seu sistema
audio_input.send_keys(audio_file_path)

time.sleep(2)

#enviar arquivo de audio
enviar_button = driver.find_element("xpath",'/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[3]/button')  
enviar_button.click()

time.sleep(5)
# Conclusão do teste
driver.quit()