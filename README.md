# Parrot

Frontend do saas Parrot. Um software que une inteligência artifical e áudios, fornecendo serviços como transcrição deles, resumos e perguntas e respostas.

![image](https://github.com/brunom764/parrotFront/assets/100807129/e95832eb-07ab-4891-aea8-91886bd39cf2)


# Features

* Usuários podem se cadastrar e fazer login em suas contas cadastradas ou pelo Google;
* Usuários autenticados podem acessar todos o serviços fornecidos.

		1. Transcrição de áudio;

		2. Gerar resumo da transcrição;

		3. Fazer perguntas sobre a transcrição.

A transcrição é gerada através da API do [AssemblyAI](https://www.assemblyai.com/docs).

O resumo e as respostas das perguntas feitas pelos usuários são gerados através da API da [OpenAI](https://platform.openai.com/docs/introduction).

## Contributing

Contribuições para o ParrotBack são muito bem-vindas! Se você gostaria de contribuir, siga estas instruções:

1. Faça um fork do repositório;
2. Crie sua branch de funcionalidade (`git checkout -b feature/SuaFeature`);
3. Adicione suas alterações (`git add .`);
3. Faça commits das suas alterações (`git commit -m 'Adicionando uma funcionalidade'`);
4. Faça push para a branch (`git push origin feature/SuaFeature`);
5. Crie um novo Pull Request.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Dependecies

    @mdi/font: 7.4.47,
    axios: 1.6.2,
    core-js: 3.8.3,
    firebase: 10.7.0,
    moment: 2.30.1,
    oh-vue-icons: 1.0.0-rc3,
    sweetalert2: 11.10.5,
    vue: 3.3.9,
    vue-google-oauth2: 1.5.10,
    vue-router: 4.2.5,
    vuetify: 3.4.3,
    vuex: 4.0.2,
    vuex-map-fields: 1.4.1
