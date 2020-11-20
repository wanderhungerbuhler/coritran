import Image from 'next/image';
import Link from 'next/link';

import { Page, Container, Menu, Slider, Content, Footer } from '@/styles/pages/Home';

export default function Home() {
  return (
    <Page>
      <Container>
        <Menu>
          <Image
            src="/images/logo.svg"
            width={200}
            height={70}
          />
          <ul>
            <li><Link href="#"><a>Sobre Nós</a></Link></li>
            <li><Link href="#"><a>Produtos</a></Link></li>
            <li><Link href="#"><a>Parceiros</a></Link></li>
            <li><Link href="#"><a>Fale Conosco</a></Link></li>
          </ul>
        </Menu>

        <Slider>
          <Image
            src="/images/slider.png"
            width="980"
            height="350"
          />
        </Slider>

        <Content>
          <section>
            <article>
              <p>Satisfação</p>
              <span>92%</span>
              <p>Atendimento Pós-Venda</p>
            </article>

            <article>
              <p>Satisfação</p>
              <span>85%</span>
              <p>Atendimento Suporte Técnico a Sistemas</p>
            </article>

            <article>
              <p>Satisfação</p>
              <span>75%</span>
              <p>Atendimento Suporte aos Colaboradores</p>
            </article>
          </section>

          <div className="line-separator"></div>

          <div className="content-vision">
            <div className="content-vision-description">
              <h1>Nós construímos sua <b>VISÃO</b></h1>
              <p>
                A Coritran conta com uma equipe multidisciplinar, qualificada para oferecer
                o serviço com eficácia e eficiência.
              </p>
              <p>
                Queremos oferecer soluções personalizadas de Comércio e Serviços, com valores
                competitivos e sem perder a qualidade dos serviços e produtos.
              </p>

              <p>Ligue Agora</p>
              <span>(21) 97017-5164</span>
            </div>

            <Image
              src="/images/building-vision.png"
              width="444"
              height="419"
            />
          </div>

          <div className="content-partner">
            <div className="content-partner-description">
              <h1>Parceiros</h1>
              <p>
                Conheça nosso programa de parceria, as vantagens exclusivas e os
                recursos que vão otimizar a rotina do seu empreendimento.
              </p>
              <p>
                Assim, você terá mais tempo para se dedicar aos seus clientes.
              </p>
            </div>

            <Image
              src="/images/icons-partner.svg"
              width="420"
              height="240"
            />
          </div>
        </Content>
      </Container>

      <div className="content-consult">
        <span>Agende uma reunião e conte seus objetivos</span>
        <p>Nossos consultores irão mostrar como levar sua estratégia ao próximo nível.</p>
      </div>

      <Footer>
        <div className="btn-consult">
        <span><a href="#">Fale com nossos consultores</a></span>
        </div>

        <Menu>
          <Image
            src="/images/logo-w.svg"
            width={200}
            height={70}
          />
          <ul>
            <li><Link href="#"><a>Sobre Nós</a></Link></li>
            <li><Link href="#"><a>Produtos</a></Link></li>
            <li><Link href="#"><a>Parceiros</a></Link></li>
          </ul>
        </Menu>

        <div className="copy">
          <p>&copy; Todos os Direitos Reservados</p>
          <div className="developer">
            <span>Desenvolvido por</span>
            <Image src="/images/logo-w.svg" width={10} height={10} />
          </div>
        </div>
      </Footer>
    </Page>
  )
}
