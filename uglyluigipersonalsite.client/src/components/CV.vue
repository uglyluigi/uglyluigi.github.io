<script setup>
    const languageMap = {
        'Java': '>10',
        'JavaScript': '>10',
        'C#': '>5',
        'Python': '~5',
        'SQL': '~5',
        'C': '~2',
        'TypeScript': '~4',
        'Rust': '~3',
        'Kotlin': '<1',
        'Elixir': '<1',
    }

    const frontendFrameworkList = [
        'Vue JS 2 & 3',
        'Angular',
        'Razor.NET',
        'React',
        'Tailwind',
        'Bootstrap',
        'WebAssembly',
    ]

    const backendFrameworkList = [
        'Spring Boot',
        'Hibernate',
        'WebLogic',
        'ASP.NET',
        'FastAPI',
        'Rocket'
    ]

    const libraries = [
        
    ]

    const editors = [
        'IntelliJ IDEA',
        'NetBeans',
        'Eclipse',
        'Visual Studio',
        'VS Code',
        'Vim'
    ]

    const devTools = [
        'Git/GitHub/GitLab',
        'Postman',
        'DBeaver',
        'SQLDeveloper',
        'GitExtensions',
        'Ant/Maven'
    ]

    const environments = [
        'Windows',
        'Linux',
        'macOS',
        'Azure',
        'IIS',
        'Tomcat'
    ]
 
</script>

<template>
    <div class="text-3xl pb-5">
        Curriculum Vitae
    </div>

    <div class="flex flex-col">
        <div class="flex flex-row pb-5 justify-between">
            <div class="outline outline-2 p-5">
                <div class="text-2xl underline pb-2">
                    Language Experience
                </div>

                <ul>
                    <li class="flex flex-row justify-between" v-for="[language, exp] in Object.entries(languageMap)">
                        <div>
                            {{ language }}
                        </div>
                        <div>
                            {{ exp }} yrs.
                        </div>
                    </li>
                </ul>
            </div>

            <div class="outline outline-2 p-5">
                <div class="text-2xl underline pb-2">
                    Framework Experience
                </div>

                <div class="flex flex-row justify-between">
                    <div>
                        <div class="text-xl underline">
                            Frontend
                        </div>

                        <ul>
                            <li class="flex flex-row justify-between" v-for="framework of frontendFrameworkList">
                                <div>
                                    {{ framework }}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div class="text-xl underline">
                            Backend
                        </div>

                        <ul>
                            <li class="flex flex-row justify-between" v-for="framework of backendFrameworkList">
                                <div>
                                    {{ framework }}
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="pb-5">
            <div class="outline outline-2 p-5">
                <div class="text-2xl underline pb-2">
                    Tooling
                </div>

                <div class="flex flex-row justify-between">
                    <div>
                        <div class="text-xl underline">
                            Code Editors
                        </div>

                        <ul>
                            <li class="flex flex-row justify-between" v-for="editor of editors">
                                <div>
                                    {{ editor }}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div class="text-xl underline">
                            Dev Tools
                        </div>

                        <ul>
                            <li class="flex flex-row justify-between" v-for="tool of devTools">
                                <div>
                                    {{ tool }}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div class="text-xl underline">
                            Environments
                        </div>

                        <ul>
                            <li class="flex flex-row justify-between" v-for="environment of environments">
                                <div>
                                    {{ environment }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="outline outline-2 p-5">
            <div class="text-2xl underline pb-2">
                Professional Work 
            </div>

            <div class="text-xl underline pb-1 pt-3">
                Sandia National Labs via CloverLeaf Solutions
            </div>

            <ul>
                <li class="pb-2">
                    > Full-stack (front-end, back-end, and host resource provisioning / configuration)
                    maintenance on information systems written with Java, JavaScript, and C#.
                </li>

                <li class="pb-2">
                    > Upgraded legacy .NET Core 2 & 3 applications to .NET 8.
                </li>

                <li class="pb-2">
                    > Performed database administration on OracleSQL databases using SQLDeveloper and
                    DBeaver.
                </li>

                <li class="pb-2">
                    > Implemented Azure-based single sign-on functionality in legacy applications.
                </li>

                <li class="pb-2">
                    > Created detailed code quality reports and documentation regarding bureaucratic
                    operations, upgrade procedures, development environment setup, and testing efforts.
                </li>

                <li class="pb-2">
                    > Provided consulting services for product managers and individuals on development teams.
                </li>

                <li class="pb-2">
                    > Assumed lead developer status temporarily on multiple information service applications
                    in their absence.
                </li>

                <li class="pb-2">
                    > Completed work trainings related to cloud administration in Azure AD, sensitive data 
                    transmission, and organizational security and cryptography policies.
                </li>

                <li class="pb-2">
                    > Automated various build processess.
                </li>
            </ul>

            <div class="text-xl underline pb-1 pt-3">
                Amount Small Business
            </div>

            <ul>
                <li class="pb-2">
                    > Created new features and fix bugs in Vue JS 2-based front end for a consumer credit loan
                    application and servicing platform.
                </li>

                <li class="pb-2">
                    > Performed database administration in PgAdmin 4.
                </li>

                <li class="pb-2">
                    > Performed maintenance work in Java-based microservice backend.
                </li>

                <li class="pb-2">
                    > Documented local development environment setup.
                </li>
            </ul>
        </div>
    </div>


</template>