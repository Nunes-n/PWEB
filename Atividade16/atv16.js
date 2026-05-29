function abrirCurso(){
    let curso = document.getElementById("cursos").value;

    if (curso == ""){
        return;
    }

    let confirmacao = confirm("Deseja abrir a janela do curso?");
    if(confirmacao){
        let novaJanela = window.open("", "", "width=600,height=300");

        if(curso == "ads"){
            novaJanela.document.write(`
                <h1>Análise e Desenvolvimento de Sistemas</h1>
                <p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</p>
            `);
        }
        if (curso == "ai"){
            novaJanela.document.write(`
                <h1>Automação Industrial</h1>
                <p>A automação é uma tecnologia que utiliza sistemas mecânicos, eletrônicos e computadorizados para a operação e controle da produção industrial. Por isso, física, eletricidade e cálculo são disciplinas fundamentais para o curso, assim como eletrônica analógica e digital.</p>
                <p>O aluno vai aprender a programar máquinas e microcontroladores, que são microprocessadores especializados para automação e controle de processos industriais. Estuda também o funcionamento de máquinas elétricas e das instalações elétricas industriais, além da aplicação dos conhecimentos de robótica e robôs para automatizar e otimizar a produção.</p>
            `);
        }
        if (curso == "ea"){
            novaJanela.document.write(`
                <h1>Eletrônica Automotiva</h1>
                <p>O tecnólogo em Eletrônica Automotiva:</p>
                <p>participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva;</p>
                <p>supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio;</p>
                <p>especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio;</p>
            `);
        }
        if (curso == "fm"){
            novaJanela.document.write(`
               <h1>Fabricação Mecânica</h1>
               <p>O egresso do CST em Fabricação Mecânica poderá atuar no projeto e na supervisão de sistemas de operações mecânicas, voltados a processos de fabricação. Domina o funcionamento, as características e a manutenção de máquinas operatrizes, máquinas-ferramenta, ferramentas e dispositivos em geral, podendo administrar todo um processo de produção mecânica. Tem domínio também dos processos de produção com base na automação mecânica. Tem conhecimento dos controles administrativos da produção, podendo atuar na área de organização e no gerenciamento de sistemas de produção.</p>
            `);
        }
        if (curso == "gq"){
            novaJanela.document.write(`
               <h1>Gestão da Qualidade</h1>
               <p>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Dissemina a cultura da qualidade em todos os setores da empresa. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade</p>
            `);
        }
        if (curso == "l"){
            novaJanela.document.write(`
               <h1>Logística</h1>
               <p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos.</p>
            `);
        }
        if (curso == "ma"){
            novaJanela.document.write(`
               <h1>Manufatura Avançada</h1>
               <p>O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos. Estruturado por blocos temáticos direcionados a projetos, o conteúdo do curso é dividido em processos de manufatura, eletrônica e automação e áreas multidisciplinares. O aluno terá uma base de artes para desenho técnico, matemática para cálculos de projetos e gestão de carreira. O inglês para linguagem técnica também é uma disciplina recorrente no curso.</p>
            `);
        }
        if (curso == "mda"){
            novaJanela.document.write(`
               <h1>Manutenção de Aeronaves</h1>
               <p>A estrutura das aeronaves e de seus sistemas e componentes - aviões de transporte de passageiros, aviões executivos, helicópteros – e as características dos materiais utilizados na fabricação; o funcionamento e a manutenção dos sistemas hidráulicos, de trens de pouso, de ar condicionado e dos propulsores, além dos processos de reparos estruturais e soldagem. O aluno também aprende a utilizar as publicações técnicas e manuais de aviões e dos componentes, estuda desenho técnico, inglês técnico aplicado à aviação, informática e legislação. As disciplinas fundamentais para o aprendizado das matérias profissionalizantes são cálculo, física, álgebra e geometria.</p> 
            `);
        }
        if (curso == "p"){
            novaJanela.document.write(`
               <h1>Polímeros</h1>
               <p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. O monitoramento da qualidade e dos processos de reciclagem envolvidos; a identificação e acompanhamento das variáveis relevantes, inclusive as referentes ao meio ambiente, são também funções desse profissional.</p>
            `);
        }
        if (curso == "pm"){
            novaJanela.document.write(`
               <h1>Processos Metalúrgicos</h1>
               <p>O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície .São atividades inerentes aos egressos deste Curso o planejamento, gestão, controle dos processos e comercialização dos produtos metalúrgicos, através da seleção, dimensionamento de equipamentos e métodos de fabricação. Incluem-se as atividades de laboratórios de ensaios mecânicos e de ensaios metalográficos, com o domínio da interrelação entre microestrutura, propriedades e aplicações dos produtos metálicos.</p>
            `);
        }
        if (curso == "pmc"){
            novaJanela.document.write(`
               <h1>Projetos Mecânicos</h1>
               <p>O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas. Está capacitado a atuar na área de organização industrial mecânica, tanto para processos como para produtos industriais. Domina a técnica do projeto de dispositivos e ferramentas de produção mecânica. Pode dedicar-se ao ensino, à pesquisa tecnológica, bem como realizar vistoria, avaliação e laudo técnico, em seu campo profissional.</p> 
            `);
        }
        if (curso == "sb"){
            novaJanela.document.write(`
               <h1>Sistemas Biomédicos</h1>
               <p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletromédicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada. Responsável também pela implantação e controle das normas de segurança dos equipamentos nos serviços de saúde, pode atuar em hospitais, policlínicas, laboratórios, fabricantes e distribuidoras de equipamentos hospitalares.</p>
            `);
        }
    }
}