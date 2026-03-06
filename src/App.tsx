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
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20132651.png" alt="<span className='font-chocolate'>Lava Aky</span> Logo" className="h-10" referrerPolicy="no-referrer" />
            <div className="text-xl font-bold text-[#846CAD]"><span className="font-chocolate">Lava Aky</span> Lavanderia de Autoatendimento</div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#planos" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">PLANOS</a>
            <a href="#b2b" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">CNPJ/CONDOMÍNIOS</a>
            <a href="#unidades" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">LOCAL</a>
            <a href="https://wa.me/5553991222096" className="bg-[#E2BA59] text-white px-4 py-2 rounded-full font-bold uppercase hover:bg-[#CB2E50] transition">AGENDAR COLETA</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
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
              <a href="https://wa.me/5553991222096" className="bg-[#846CAD] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#CB2E50] transition shadow-lg">
                Agendar Coleta via WhatsApp
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
            <a href="https://www.google.com/search?q=Lava+aky+Pelotas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-200 transition shadow-lg">
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

          <a href="https://wa.me/5553991222096" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-2xl font-bold hover:scale-105 transition shadow-lg">
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
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#846CAD]">O Retorno do Tempo: Seu recurso mais valioso.</h2>
            <p className="text-lg text-stone-700 mb-4"><strong>Em Casa:</strong> 3 a 5 horas perdidas por semana com o ciclo interminável de separar, lavar, estender, esperar secar, recolher e passar.</p>
            <p className="text-lg text-stone-700"><strong>Solução <span className="font-chocolate">Lava Aky</span>:</strong> Apenas 1 a 1,5 hora total. Lavagem rápida, secagem eficiente e roupas prontas para uso.</p>
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
        </section>

        {/* Grade de Planos */}
        <section id="planos">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#846CAD]">PLANOS E PACOTES <span className="font-chocolate">Lava Aky</span></h2>
          <p className="text-center text-xl font-semibold text-stone-800 mb-6">Rotina leve, bolso cheio.</p>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            A <span className="font-chocolate">Lava Aky</span> não é apenas uma lavanderia de autoatendimento, nós entregamos praticidade no seu dia-a-dia, economia e uma experiência que transformadora ao de cuidar das suas roupas.
            <br /><br />
            Oferecemos Pacotes de Uso, buscando o máximo de conveniência e o melhor custo-benefício. Você pode lavar e secar seus cestos de roupa com descontos progressivos, garantindo o cuidado com suas roupas.
            <br /><br />
            Venha para <span className="font-chocolate">Lava Aky</span> Lavanderia e escolha o pacote ideal para manter suas roupas sempre em dia!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Básico', ciclos: 8, preco: 136.80, desc: 'Uso ocasional/solteiros' },
              { name: 'Plus', ciclos: 16, preco: 129.60, desc: 'Uso regular/casais' },
              { name: 'Premium', ciclos: 24, preco: 122.40, desc: 'Uso frequente/famílias' },
            ].map(plano => (
              <div key={plano.name} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 text-center">
                <h3 className="text-2xl font-bold mb-2">{plano.name}</h3>
                <p className="text-4xl font-bold text-[#846CAD] mb-4">{plano.ciclos} <span className="text-lg font-normal text-stone-500">ciclos</span></p>
                <p className="text-2xl font-bold mb-4">R$ {plano.preco.toFixed(2).replace('.', ',')}</p>
                <p className="text-stone-600 mb-6">{plano.desc}</p>
                <a href="https://wa.me/5553991222096" className="block bg-[#E2BA59] text-white py-3 rounded-full font-semibold hover:bg-[#CB2E50] transition">Escolher</a>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-500 mt-8 text-sm">* 1 ciclo = 1 lavagem ou 1 secagem.</p>
        </section>

        {/* Seção B2B */}
        <section id="b2b" className="bg-[#846CAD] text-white p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-6 text-center">PLANOS E PACOTES <span className="font-chocolate">Lava Aky</span> PARA CNPJ</h2>
          <p className="text-lg mb-12 text-center max-w-2xl mx-auto">A <span className="font-chocolate">Lava Aky</span> tem uma solução para todo tipo de negócio.</p>
          <div className="grid md:grid-cols-3 gap-8">
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
        </section>

        {/* Clube de Fidelidade */}
        <section id="deixa-aky" className="bg-stone-100 p-12 rounded-3xl border border-stone-200">
          <h2 className="text-4xl font-bold mb-8 text-[#846CAD]">🧺 Serviço "Deixa aky"</h2>
          
          {/* Videos */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <video
              controls
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
              src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQOh2tfcb2PSI3PUdJWcyLFSnLDS4G-zME4dhh2JdsA8ooQJYFP9an6ckt9l-wIQwzLXvSJ8MbuXaMl2d801DmZQTWMJcpm20rTJABU.mp4"
            />
            <video
              controls
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
              src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQP4kHSsZPbuiFtdU8xe4jXfafwtt-_7RPGmJivCbqbocopJeJCBuZ73womdBq_f6J48lAi3-touiIDGETb_VtylTChG1bGVNLs857o.mp4"
            />
          </div>

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
              <ul className="space-y-2 text-stone-700 mb-6">
                <li>• A equipe executará o serviço contratado (lavar e secar).</li>
                <li>• Assim que as roupas estiverem limpas e dobradas, você receberá um aviso no WhatsApp.</li>
                <li>• Volte ao mesmo armário e use sua chave para retirar as roupas.</li>
                <li>• <strong>Dúvidas?</strong> Entre em contato pelo telefone: (53) 99122-2096.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200">
              <h3 className="text-xl font-bold mb-4">🕒 Horários e Prazos</h3>
              <ul className="space-y-1 text-stone-700">
                <li>• Segunda a Quinta-Feira: 07:00 às 22:00</li>
                <li>• Sexta-feira: 07:00 às 13:00</li>
                <li>• Sábado e Domingo: <strong>NÃO funciona</strong></li>
                <li>• <strong>Prazo de Entrega:</strong> 1 dia útil (24 horas)</li>
                <li className="text-sm text-stone-500 mt-2">* A retirada deve ser feita no mesmo dia em que você receber o aviso no WhatsApp.</li>
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
        </section>

        {/* Clube de Benefícios */}
        <section id="beneficios" className="py-16 bg-stone-50">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#846CAD]">CLUBE DE BENEFÍCIOS</h2>
          <p className="text-center text-stone-600 mb-12">Aqui você lava e ainda ganha. Vantagens exclusivas para nossos clientes.</p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Cashback', desc: 'Quem escolhe a 2 Ciclos regularmente aproveita benefícios especiais de forma automática. Porque fidelidade merece retorno.' },
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
                alt="Localização <span className='font-chocolate'>Lava Aky</span>" 
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
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20132651.png" alt="<span className='font-chocolate'>Lava Aky</span> Logo" className="h-16 mb-4" referrerPolicy="no-referrer" />
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
      </footer>

      {/* WhatsApp Button */}
      <a href="https://wa.me/5553991222096" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
