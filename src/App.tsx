/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Menu, X, CheckCircle, Clock, Zap, Star, MapPin, Phone, Instagram, Facebook, ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura_de_tela_2026-03-07_113951-removebg-preview.png" alt="Lava Aky Logo" className="h-10" referrerPolicy="no-referrer" />
            <div className="text-xl font-bold text-[#846CAD]"><span className="font-chocolate">Lava Aky</span> Lavanderia de Autoatendimento</div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#planos" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">PLANOS</a>
            <a href="#b2b" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">CNPJ/CONDOMÍNIOS</a>
            <a href="#unidades" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">LOCAL</a>
            <a href="https://wa.me/5553991222096" className="bg-[#E2BA59] text-white px-4 py-2 rounded-full font-bold uppercase hover:bg-[#CB2E50] transition">AGENDAR COLETA</a>
          </div>
          <button className="md:hidden text-[#846CAD]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                <a 
                  href="#planos" 
                  className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase py-2 border-b border-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PLANOS
                </a>
                <a 
                  href="#b2b" 
                  className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase py-2 border-b border-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CNPJ/CONDOMÍNIOS
                </a>
                <a 
                  href="#unidades" 
                  className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase py-2 border-b border-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOCAL
                </a>
                <a 
                  href="https://wa.me/5553991222096" 
                  className="bg-[#E2BA59] text-white px-6 py-3 rounded-full font-bold uppercase text-center hover:bg-[#CB2E50] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AGENDAR COLETA
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Video/Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-stone-100">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-698df21a-6d22-4040-88d4-05cb8a59cbae.mp4"
              />
            </div>
          </motion.div>

          {/* Right: Text and Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block bg-[#F29593]/20 text-[#CB2E50] px-4 py-1 rounded-full text-sm font-semibold mb-6">
              • Tecnologia profissional • Cuidado especializado
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-stone-900 leading-tight">
              Sua aliada para você <span className="text-[#846CAD]">aproveitar as coisas boas da vida</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              A <span className="font-chocolate">Lava Aky</span> lavanderia nasceu para transformar a rotina doméstica em uma experiência ágil e eficiente. Localizada no centro de Pelotas, oferecemos um sistema híbrido, onde você poderá utilizar nosso serviço de 3 maneiras: autoatendimento completo e intuitivo, serviço de atendente ou delivery. Nossas máquinas profissionais garantem uma limpeza profunda e secagem rápida, economizando água, energia e, principalmente, o seu tempo. Ambiente climatizado, Wi-Fi gratuito, Alexa e higiene rigorosa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.link/w77i2s" target="_blank" rel="noopener noreferrer" className="bg-[#846CAD] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#CB2E50] transition shadow-lg">
                Agendar Coleta
              </a>
              <a href="#planos" className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-semibold border border-stone-200 hover:border-[#E2BA59] transition">
                Ver planos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prova Social */}
      <section id="depoimentos" className="relative py-16 overflow-hidden text-white my-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter blur-sm"
            src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-794ef6cd-e378-40b7-a396-dda96875316c.mp4"
          />
          <div className="absolute inset-0 bg-[#846CAD]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Quem confia, recomenda.</h2>
          <p className="text-center text-stone-200 mb-12">Avaliação 5 estrelas no Google</p>
          
          <div className="overflow-x-auto flex gap-6 px-4 pb-8 snap-x">
            {[
              { nome: 'Janaina Redü', texto: 'A lavanderia está instalada em um local estratégico, bom para estacionar, tranquilo muito limpo. E os edredons foram entregues impecáveis pareciam ser novos.' },
              { nome: 'delta civil-DIEGO', texto: 'Excepcional o atendimento do pessoal tanto via telefone como pelo whatsapp. Super indico eles. Parabéns pelo profissionalismo e rapidez na entrega' },
              { nome: 'Gabriela Marini', texto: 'Muito bom! Serviço rápido, bem feito, preço justo. Lavamos dois cobertores de casal super grossos e ficaram limpíssimos e cheirosos.' },
              { nome: 'luiza maronn', texto: 'Excelente atendimento. Muito atenciosos com as roupas e cobertores que deixamos lá. Fui lá nessa tarde lavar um edredom tamanho quenn. Sem explicações para o quão cheiroso e limpinho ele ficou.' },
              { nome: 'Alessandro Marques', texto: 'Serviço incrível, agilidade e qualidade definem!!! Cliente fidelizado aqui…' },
              { nome: 'Bruna Garcia', texto: 'Ótimo e rápido atendimento! Utilizei o serviço da lavanderia para lavagem de um cobertor, o item foi recolhido e entregue na minha casa.' },
              { nome: 'Alberto Langhinrichs', texto: 'Excelente atendimento e serviço de ótima qualidade. Lavei minhas roupas e um cobertor pesado com ótimo preço e muito bem atendido.' },
              { nome: 'Cristian Rafael Campos', texto: 'Melhor da cidade, simplesmente isso! Atendimento excelente, produtos da melhor qualidade que fica um cheiro maravilhoso.' },
              { nome: 'Lucas Faria', texto: 'É a melhor lavanderia de pelotas, local de fácil localização, máquinas novas e eficientes, excelente espaço de espera e preço excelente !!!!!' },
              { nome: 'Lais Demarco', texto: 'Ótimo atendimento, nunca tinha utilizado esse tipo de serviço de auto atendimento e a moça me chamou no wpp e me deu todo suporte, super educada e atenciosa.' },
              { nome: 'Natalie Griep', texto: 'Amei o serviço, impecável! Roupa cheirosinha e divida, só coloquei nos guarda-roupas 😅 amei!' },
            ].map((depoimento, index) => (
              <div key={index} className="bg-white text-stone-800 p-8 rounded-3xl shadow-lg min-w-[300px] max-w-[300px] snap-center">
                <div className="flex text-[#E2BA59] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic mb-6">"{depoimento.texto}"</p>
                <p className="font-bold text-stone-900 mb-1">{depoimento.nome}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <a href="https://g.page/r/CWyKwEm87zhAEBE/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-200 transition shadow-lg">
              <Star size={20} fill="currentColor" /> Deixar avaliação no Google
            </a>
          </div>
        </div>
      </section>

      {/* Siga-nos no Instagram */}
      <section id="instagram" className="py-16 bg-white overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#846CAD]">Siga-nos no Instagram</h2>
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20121135.png" className="h-64 rounded-2xl" referrerPolicy="no-referrer" />
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20121157.png" className="h-64 rounded-2xl" referrerPolicy="no-referrer" />
            {/* Duplicate for seamless loop */}
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20121135.png" className="h-64 rounded-2xl" referrerPolicy="no-referrer" />
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20121157.png" className="h-64 rounded-2xl" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/lavaaky" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#846CAD] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#CB2E50] transition shadow-lg">
            Seguir no Instagram
          </a>
        </div>
      </section>

      {/* Valores e Delivery */}
      <section id="valores-delivery" className="py-16 bg-[#F5F3F7] text-stone-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#846CAD]">CONVÊNIOS COM CONDOMÍNIOS</h2>
          <p className="text-xl mb-12 text-stone-700">Leve a praticidade da <span className="font-chocolate">Lava Aky</span> para o seu condomínio! Oferecemos condições especiais e um serviço de delivery exclusivo para moradores.</p>
          
          <div className="bg-[#846CAD] text-white p-8 rounded-3xl mb-12 inline-block shadow-xl">
            <p className="text-xl font-bold">LAVE OU SEQUE</p>
            <p className="text-lg">Por Apenas</p>
            <p className="text-6xl font-bold">R$ 17,98</p>
          </div>
          
          <div className="space-y-4 mb-12 text-lg text-stone-700 bg-white p-8 rounded-3xl shadow-lg border border-[#846CAD]/20">
            <p className="font-bold text-[#846CAD]">👉 Vantagens exclusivas para Condomínios:</p>
            <p>• Coleta e entrega programada no seu condomínio 🚚</p>
            <p>• Serviço de dobragem como BRINDE 🩳</p>
            <p>• Retiradas sempre às segundas e quintas-feiras</p>
            <p>• Entrega em até 24h após a coleta ⚡</p>
            <p>• Lavagem expressa com todo cuidado e agilidade</p>
          </div>

          <h3 className="text-3xl font-bold mb-8 text-[#846CAD]">EM CASA X <span className="font-chocolate">Lava Aky</span></h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="bg-white text-stone-900 p-8 rounded-3xl w-full md:w-64 shadow-lg border border-stone-200">
              <p className="font-bold text-xl mb-4">EM CASA</p>
              <ul className="text-left space-y-2 text-stone-600">
                <li>• água</li>
                <li>• luz</li>
                <li>• estender</li>
                <li>• passar</li>
                <li>• produtos</li>
              </ul>
            </div>
            <span className="text-4xl font-bold text-[#846CAD]">X</span>
            <div className="bg-[#CB2E50] text-white p-8 rounded-3xl w-full md:w-64 shadow-lg">
              <p className="font-bold text-xl mb-4"><span className="font-chocolate">Lava Aky</span></p>
              <p className="font-bold text-lg">tudo incluso no valor</p>
            </div>
          </div>

          <a href="https://wa.me/5553991222096" className="inline-flex items-center gap-3 bg-[#846CAD] text-white px-8 py-4 rounded-full text-2xl font-bold hover:scale-105 transition shadow-lg">
            <MessageCircle size={32} /> Solicitar Convênio
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Infográfico de Valor */}
        <section id="valor" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[400px] rounded-2xl shadow-lg"
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQN90fgoausIgAIwRxPxLTYRLGSx4MQgu7jJWTHuDJzPi3fFpSFf4ODUeOcEywn3V7J6ekA1QW_rHPVbiiHg90_Yw4D56kiTONfjCzI.mp4"
              />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#846CAD]">O Retorno do Tempo: Seu recurso mais valioso.</h2>
              <p className="text-lg text-stone-700 mb-4"><strong>Em Casa:</strong> 3 a 5 horas perdidas por semana com o ciclo interminável de separar, lavar, estender, esperar secar, recolher e passar.</p>
              <p className="text-lg text-stone-700"><strong>Solução <span className="font-chocolate">Lava Aky</span>:</strong> Apenas 1:15. Lavagem rápida, secagem eficiente e roupas prontas para uso.</p>
              <div className="mt-6 p-4 bg-[#F29593]/20 rounded-xl border border-[#F29593]">
                <p className="font-semibold text-[#CB2E50]">O calor da secadora profissional elimina a necessidade de passar a maioria das roupas. É só dobrar e guardar!</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <h3 className="text-2xl font-bold mb-6 text-[#E2BA59]">A Matemática Real</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Em Casa (custo/mês)</span>
                  <span className="font-bold text-[#CB2E50]">R$ 170 - R$ 300</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Na <span className="font-chocolate">Lava Aky</span> (custo/mês)</span>
                  <span className="font-bold text-[#846CAD]">~ R$ 144</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grade de Planos */}
        <section id="planos">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#846CAD]">PLANOS E PACOTES <span className="font-chocolate">Lava Aky</span></h2>
          <p className="text-center text-xl font-semibold text-stone-800 mb-6">Rotina leve, bolso cheio.</p>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            A <span className="font-chocolate">Lava Aky</span> não é apenas uma lavanderia de autoatendimento, nós entregamos praticidade no seu dia a dia, economia e uma experiência transformadora ao cuidar das suas roupas.
            <br /><br />
            Oferecemos Pacotes de Uso, buscando o máximo de conveniência e o melhor custo-benefício. Você pode lavar e secar seus cestos de roupa com descontos progressivos, garantindo o cuidado com suas roupas.
            <br /><br />
            Venha para <span className="font-chocolate">Lava Aky</span> Lavanderia e escolha o pacote ideal para manter suas roupas sempre em dia!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Básico', ciclos: 8, preco: 136.80, desc: 'Uso ocasional/solteiros', link: 'https://wa.link/r44e1y' },
              { name: 'Plus', ciclos: 16, preco: 259.20, desc: 'Uso regular/casais', link: 'https://wa.link/u10gjm' },
              { name: 'Premium', ciclos: 24, preco: 381.60, desc: 'Uso frequente/famílias', link: 'https://wa.link/u10gjm' },
            ].map(plano => (
              <div key={plano.name} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 text-center">
                <h3 className="text-2xl font-bold mb-2">{plano.name}</h3>
                <p className="text-4xl font-bold text-[#846CAD] mb-4">{plano.ciclos} <span className="text-lg font-normal text-stone-500">ciclos</span></p>
                <p className="text-2xl font-bold mb-4">R$ {plano.preco.toFixed(2).replace('.', ',')}</p>
                <p className="text-stone-600 mb-6">{plano.desc}</p>
                <a href={plano.link} target="_blank" rel="noopener noreferrer" className="block bg-[#E2BA59] text-white py-3 rounded-full font-semibold hover:bg-[#CB2E50] transition mb-3">Escolher</a>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-500 mt-8 text-sm">* 1 ciclo = 1 lavagem ou 1 secagem.</p>
        </section>

        {/* Seção B2B */}
        <section id="b2b" className="bg-[#846CAD] text-white p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-6 text-center">PLANOS E PACOTES <span className="font-chocolate">Lava Aky</span> PARA CNPJ</h2>
          <p className="text-lg mb-12 text-center max-w-2xl mx-auto">A <span className="font-chocolate">Lava Aky</span> tem uma solução para todo tipo de negócio.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Hospedagem (Hotéis e Airbnbs)', desc: 'Para o cuidado constante com roupas de cama, mesa e banho.' },
              { title: 'Serviços (Salões de Beleza e Clínicas)', desc: 'Higiene e apresentação profissional de toalhas e uniformes.' },
              { title: 'Comércios e Empresas', desc: 'Lavagem regular de uniformes de funcionários e outros itens têxteis.' },
            ].map(item => (
              <div key={item.title} className="bg-[#9A81C2] p-8 rounded-2xl border border-[#846CAD]">
                <CheckCircle className="text-[#E2BA59] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-100">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://wa.link/o3ahop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#846CAD] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition shadow-lg">
              <MessageCircle size={24} /> Solicitar Planos CNPJ
            </a>
          </div>
        </section>

        {/* Clube de Fidelidade */}
        <section id="deixa-aky" className="bg-stone-100 p-12 rounded-3xl border border-stone-200">
          <h2 className="text-4xl font-bold mb-8 text-[#846CAD]">🧺 Serviço "Deixa aky"</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Como funciona (Passo a Passo)</h3>
                  <ul className="space-y-2 text-stone-700">
                    <li>• <strong>Medição:</strong> Coloque as roupas no cesto de medida para saber de quantos ciclos você precisará.</li>
                    <li>• <strong>Depósito:</strong> Coloque as roupas dentro do armário disponível.</li>
                    <li>• <strong>Segurança:</strong> Tranque o armário e leve a chave com você.</li>
                    <li>• <strong>Notificação:</strong> Envie uma mensagem para o WhatsApp da empresa com seu CPF, Nome e Número do armário.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">✅ O que acontece depois</h3>
                  <ul className="space-y-2 text-stone-700">
                    <li>• A equipe executará o serviço contratado (lavar e secar).</li>
                    <li>• Assim que as roupas estiverem limpas e dobradas, você receberá um aviso no WhatsApp.</li>
                    <li>• Volte ao mesmo armário e use sua chave para retirar as roupas.</li>
                    <li>• <strong>Dúvidas?</strong> Entre em contato pelo telefone: (53) 99122-2096.</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-bold mb-4">🕒 Horários e Prazos</h3>
                  <ul className="space-y-1 text-stone-700">
                    <li>• Segunda a Quinta-Feira: 07:00 às 22:00</li>
                    <li>• Sexta-feira: 07:00 às 13:00</li>
                    <li>• Sábado e Domingo: <strong>NÃO funciona</strong></li>
                    <li>• <strong>Prazo de Entrega:</strong> 1 dia útil (24 horas)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-bold mb-4">💰 Custos e Pagamento</h3>
                  <ul className="space-y-1 text-stone-700">
                    <li>• <strong>Valor:</strong> R$ 10,00 por cesto medida.</li>
                    <li>• <strong>Forma de Pagamento:</strong> Via Pix (chave e-mail: lava.aky@gmail.com).</li>
                  </ul>
                </div>
              </div>
            </div>
            <motion.div 
              className="flex justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-11%20141212.png" 
                alt="Serviço Deixa Aky" 
                className="w-full max-w-[400px] rounded-3xl shadow-[0_0_40px_rgba(132,108,173,0.3)] border-8 border-white object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Clube de Benefícios */}
        <section id="beneficios" className="py-16 bg-stone-50">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#846CAD]">CLUBE DE BENEFÍCIOS</h2>
          <p className="text-center text-stone-600 mb-12">Aqui você lava e ainda ganha. Vantagens exclusivas para nossos clientes.</p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Cashback', desc: 'Quem escolhe a Lava Aky regularmente aproveita benefícios especiais de forma automática. Porque fidelidade merece retorno.' },
              { title: 'Aniversariantes', desc: 'No mês do seu aniversário, você recebe um benefício exclusivo para comemorar com roupa limpa e renovada.' },
              { title: 'Cupons', desc: 'Clientes cadastrados recebem promoções e condições especiais ao longo do ano via WhatsApp.' },
              { title: 'Promoções', desc: 'Campanhas especiais divulgadas em nossas redes sociais e unidades.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 text-center">
                <div className="bg-[#846CAD]/10 text-[#846CAD] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#846CAD] text-white p-12 rounded-3xl">
            <div>
              <h3 className="text-3xl font-bold mb-6">Baixe nosso aplicativo e aproveite!</h3>
              <p className="text-lg mb-8">Tenha acesso a todos os benefícios, acompanhe seu cashback e agende serviços na palma da sua mão.</p>
              <a href="https://play.google.com/store/apps/details?id=com.begin.laundway&pcampaignid=web_share" className="inline-block bg-[#E2BA59] text-stone-900 px-10 py-4 rounded-full text-xl font-bold hover:bg-white transition shadow-lg">
                Baixar Aplicativo <span className="font-chocolate">Lava Aky</span>
              </a>
            </div>
            <div className="flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[250px] aspect-[9/16] rounded-3xl shadow-2xl border-4 border-white/20"
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-127bef1b-bd80-45fd-8390-59a8e72b4b12.mp4"
              />
            </div>
          </div>
        </section>

        {/* Clube de Fidelidade */}
        <section id="fidelidade" className="grid md:grid-cols-2 gap-12 items-center bg-[#846CAD] text-white p-12 rounded-3xl">
          <div>
            <h2 className="text-4xl font-bold mb-6">Clube de Fidelidade e Mimos</h2>
            <p className="text-lg mb-8">A cada 10 ciclos completos, ganhe 1 secagem. A cada 20 ciclos, ganhe 1 BAG exclusiva.</p>
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <p className="font-bold text-xl">🎁 Presente de Aniversário: No seu mês, a <span className="font-chocolate">Lava Aky</span> reserva um presente especial para você!</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-stone-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl"
              src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-7cd289a9-71f8-4134-ab2b-b8b226f6820a.mp4"
            />
          </div>
        </section>
        {/* Comodidades e Regras */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Comodidades */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
            <h2 className="text-3xl font-bold mb-8 text-[#846CAD]">Comodidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-stone-50 rounded-2xl">
                <div className="text-[#846CAD] mb-3 flex justify-center"><Zap size={32} /></div>
                <h4 className="font-bold mb-1">Wi-Fi Grátis</h4>
                <p className="text-xs text-stone-500">Conecte-se enquanto espera.</p>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-2xl">
                <div className="text-[#846CAD] mb-3 flex justify-center"><Clock size={32} /></div>
                <h4 className="font-bold mb-1">Ar Condicionado</h4>
                <p className="text-xs text-stone-500">Ambiente sempre climatizado.</p>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-2xl">
                <div className="text-[#846CAD] mb-3 flex justify-center"><Star size={32} /></div>
                <h4 className="font-bold mb-1">Alexa</h4>
                <p className="text-xs text-stone-500">Peça sua música favorita.</p>
              </div>
            </div>
          </div>

          {/* Regras de Uso e Segurança */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
            <h2 className="text-3xl font-bold mb-6 text-[#846CAD]">Regras de Uso e Segurança</h2>
            <ul className="space-y-3 text-sm text-stone-700">
              <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-green-500 mt-1 shrink-0" /> Respeite a capacidade indicada em cada máquina.</li>
              <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-green-500 mt-1 shrink-0" /> Meça as peças sempre soltas, sem compactar no cesto e ultrapassar a borda.</li>
              <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-green-500 mt-1 shrink-0" /> Respeite a ordem de chegada.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Proibido lavar ou secar tapetes, travesseiro, panos de chão, sapatos, roupas com graxa, areia ou excesso de pelos.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Proibido adicionar produtos em pó em nossos equipamentos.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Não adicione roupas sem centrifugar em nossas secadoras.</li>
              <li className="flex gap-2 items-start"><X size={16} className="text-red-500 mt-1 shrink-0" /> Não é permitido lavar acessórios e roupas de pets nas máquinas de uso comum por questões de higiene e conservação dos equipamentos.</li>
            </ul>
          </div>
        </section>

        {/* Unidade Section */}
        <section id="unidades" className="py-16 bg-white rounded-3xl shadow-lg border border-stone-100 p-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#846CAD]">Nosso Local</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-stone-800">Endereço: R. Andrade Neves, 3061 - Centro, Pelotas - RS, 96020-080</p>
              <p className="text-lg font-semibold text-stone-800">Telefone: (53) 99122-2096</p>
              <a 
                href="https://www.google.com/maps/place/Lava+aky+%7C+Lavanderia+de+Autoatendimento+%7C+Centro+%7C+Pelotas%2FRS/@-31.7572458,-52.3379421,17z/data=!3m1!4b1!4m6!3m5!1s0x9511b50026d72ab5:0x4038efbc49c08a6c!8m2!31.7572458!4d-52.3379421!16s%2Fg%2F11vr1sv99b?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#846CAD] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#CB2E50] transition"
              >
                Como chegar
              </a>
            </div>
            <div className="w-full space-y-4">
              <img 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20133749.png" 
                alt="Localização Lava Aky" 
                className="w-full rounded-2xl shadow-inner"
                referrerPolicy="no-referrer"
              />
              <a 
                href="https://www.google.com/maps/place/Lava+aky+%7C+Lavanderia+de+Autoatendimento+%7C+Centro+%7C+Pelotas%2FRS/@-31.7572458,-52.3379421,17z/data=!3m1!4b1!4m6!3m5!1s0x9511b50026d72ab5:0x4038efbc49c08a6c!8m2!31.7572458!4d-52.3379421!16s%2Fg%2F11vr1sv99b?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-green-600 transition shadow-lg animate-bounce"
              >
                <MapPin size={24} /> Abrir no Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Simbologia Têxtil */}
        <section id="simbologia" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#846CAD]">Simbologia Têxtil</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[400px] rounded-2xl shadow-lg"
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-37ae5719-fe1b-4d99-b8f8-78438049407d.mp4"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
                <h3 className="text-2xl font-bold mb-6 text-[#846CAD] text-center">Lavagem</h3>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-center gap-3"><strong>Lavagem à máquina:</strong> Processo normal.</li>
                  <li className="flex items-center gap-3"><strong>Lavagem à máquina (ciclo delicado):</strong> Ação mecânica reduzida.</li>
                  <li className="flex items-center gap-3"><strong>Lavagem manual:</strong> Não lavar em máquina.</li>
                  <li className="flex items-center gap-3"><strong>Não lavar:</strong> Não utilizar água.</li>
                  <li className="flex items-center gap-3"><strong>Alvejante:</strong> Permitido qualquer agente de alvejamento.</li>
                  <li className="flex items-center gap-3"><strong>Não usar alvejante:</strong> Proibido o uso de alvejantes.</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
                <h3 className="text-2xl font-bold mb-6 text-[#846CAD] text-center">Secagem</h3>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-center gap-3"><strong>Secar:</strong> Secagem em tambor permitida.</li>
                  <li className="flex items-center gap-3"><strong>Secar em temperatura mínima:</strong> Secagem suave.</li>
                  <li className="flex items-center gap-3"><strong>Não secar:</strong> Não utilizar secadora.</li>
                  <li className="flex items-center gap-3"><strong>Secar na sombra:</strong> Secagem natural à sombra.</li>
                  <li className="flex items-center gap-3"><strong>Secar na horizontal:</strong> Estender sobre superfície plana.</li>
                  <li className="flex items-center gap-3"><strong>Secar em varal:</strong> Secagem natural pendurada.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas Frequentes (FAQ) */}
        <section id="faq" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#846CAD]">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Como funciona o sistema de autoatendimento?", a: "É simples! Você escolhe a máquina, coloca suas roupas, realiza o pagamento via totem ou aplicativo e a máquina inicia o ciclo automaticamente." },
              { q: "Preciso levar sabão e amaciante?", a: "Não! Nossas máquinas já possuem dosagem automática de sabão e amaciante profissionais de alta qualidade inclusos no valor." },
              { q: "Quanto tempo leva para lavar e secar?", a: "Cada ciclo de lavagem leva em média 30 a 35 minutos, e a secagem leva em média 45 minutos." },
              { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos cartões de débito, crédito e Pix diretamente no nosso totem de autoatendimento." },
              { q: "Posso lavar qualquer tipo de roupa?", a: "Sim, desde que respeitadas as etiquetas das roupas e as regras da unidade (proibido tapetes pesados, sapatos, etc)." },
              { q: "Como funcionam os pacotes de ciclos?", a: "Você pode comprar pacotes com 8, 16 ou 24 ciclos com descontos progressivos para usar quando quiser." },
              { q: "O que é o serviço 'Deixa Aky'?", a: "É a nossa conveniência onde você deixa suas roupas no armário, nós lavamos, secamos, dobramos e avisamos quando estiver pronto para retirar." },
              { q: "A lavanderia funciona em feriados?", a: "Sim! Nossa unidade de autoatendimento funciona todos os dias, incluindo feriados, das 07h às 22h." },
              { q: "As máquinas são higienizadas?", a: "Sim, as máquinas passam por processos de higienização constantes e o próprio sabão utilizado possui ação desinfetante." },
              { q: "Posso lavar acessórios de pet?", a: "Não é permitido lavar acessórios e roupas de pets nas máquinas de uso comum por questões de higiene e conservação dos equipamentos." },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group">
                <summary className="p-6 font-bold cursor-pointer flex justify-between items-center list-none hover:bg-stone-50 transition">
                  {faq.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform" size={20} />
                </summary>
                <div className="p-6 pt-0 text-stone-600 border-t border-stone-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative py-12 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter blur-sm"
            src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-794ef6cd-e378-40b7-a396-dda96875316c.mp4"
          />
          <div className="absolute inset-0 bg-stone-900/80"></div>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center text-white">
          <div>
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura_de_tela_2026-03-10_161143-removebg-preview.png" alt="Lava Aky Logo" className="h-24 mb-4" referrerPolicy="no-referrer" />
            <p className="flex items-center gap-2 font-bold"><MapPin size={18}/> Rua Andrade Neves, 3061 - Pelotas/RS</p>
            <p className="flex items-center gap-2 mt-2 font-bold"><Clock size={18}/> 07h às 22h</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/lavaaky" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href="https://www.facebook.com/lavaaky" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="flex items-center gap-2 font-bold"><Phone size={18}/> 53 99122-2096</p>
            <p className="flex items-center gap-2 mt-2 font-bold"><a href="mailto:lava.aky@gmail.com">lava.aky@gmail.com</a></p>
          </div>
        </div>
        <div className="relative z-10 text-center mt-12 pt-8 border-t border-white/10 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Lava Aky - Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a href="https://wa.me/5553991222096" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
