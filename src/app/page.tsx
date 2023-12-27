import Image from 'next/image';
import Loreal from '../img/loreal.png';
import Script from 'next/script';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    input[type="text"], input[type="email"], input[type="tel"] {\n    width: 95%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    font-size: 16px;\n}\n  ',
        }}
      />
  
      <div id="contato" style={{ marginTop: '-20px' }}>
        <Image id="desktop" src={Loreal} width={800} height={650} alt={''} />
        <div className="form-container">
          <Image id="mobile" src={Loreal} width={380} height={400} alt={''} />
          <h2>Formulário de Inscrição</h2>
          <form id="meuFormulario" method="post">
            <div className="form-group">
              <label htmlFor="nome">Nome Completo:</label>
              <input type="text" id="nome" name="nome" required="" />
            </div>
            {/* Corrigir o typo no nome do campo "Nome do Salão" */}
            <div className="form-group">
              <label htmlFor="name-salao">Nome do Salão:</label>
              <input type="text" id="name-salao" name="nome-salao" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF:</label>
              <input type="text" id="cpf" name="cpf" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" id="phone" name="telefone" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmacao">Confirma presença?</label>
              <input
                type="radio"
                id="sim"
                name="confirmacao"
                defaultValue="Sim"
                required=""
              />
              Sim
              <input type="radio" id="nao" name="confirmacao" defaultValue="Não" />
              Não
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Enviar" />
            </div>
          </form>
        </div>
      </div>
      <Script>
        {`
          const formulario = document.getElementById('meuFormulario');

          formulario.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const data = new FormData(formulario);
            const url = 'https://formspree.io/f/xzbljqkg';

            fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json'
              },
              body: data
            })
              .then(response => {
                if (response.ok) {
                  alert('E-mail enviado com sucesso!');
                  formulario.reset();
                } else {
                  alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
                }
              })
              .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
              });
          });
        `}
      </Script>
    </>
  );
}
