
# NOTES

- [Material complementar das aulas][1]
- [Get started with Swashbuckle and ASP.NET Core][2]
- [xUnit - getting started][3]
- TBD

-----------------------------------------

# Drafts

**Instalar .NET**
https://dotnet.microsoft.com/en-us/download

**Como referenciar o projeto a ser testado**
- commit: `feat: dotnet add reference etc/RocketseatAuction.API.csproj`

**Como instalar depêndencias**
- `dotnet add package FluentAssertions --version 6.12.0` -- https://www.nuget.org/packages/FluentAssertions/

-----------------------------------------

# Getting started with C#

Para iniciar e executar seu projeto C#, siga os passos abaixo:

1. Abra o terminal na raiz do seu projeto.
2. Certifique-se de ter o SDK do .NET instalado. Você pode baixá-lo em dotnet.microsoft.com.
3. Execute o comando para restaurar as dependências do projeto:
    ```bash
    dotnet restore
    ```
4. Navegue até o diretório da sua aplicação usando o comando:
    ```bash
    cd src/RocketseatAuction.API
    ```
5. Execute a aplicação usando o comando:
    ```bash
    dotnet run
    ```

Isso iniciará sua aplicação C# e você poderá acessá-la em um navegador ou ferramenta de API, dependendo do tipo de aplicação que está sendo desenvolvida. Certifique-se de que a porta especificada no arquivo launchSettings.json está correta.

Lembre-se de verificar as configurações de desenvolvimento no arquivo appsettings.Development.json. Caso seja necessário, ajuste as configurações de banco de dados ou outras configurações específicas do ambiente de desenvolvimento.

6. Acesse API na página do Swagger:
    ```bash
    open http://localhost:5123/swagger/index.html
    ```

-----------------------------------------



<!-- Footnote links -->

[1]: https://efficient-sloth-d85.notion.site/NLW-14-Expert-9e11ff472de64b08a5f9e277a20c3ecc?pvs=18
[2]: https://learn.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-8.0&tabs=visual-studio
[3]: https://xunit.net/docs/getting-started/netcore/cmdline#create-project