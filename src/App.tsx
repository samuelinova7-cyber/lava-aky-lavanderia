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
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20132651.png" alt="Lava aky Logo" className="h-10" referrerPolicy="no-referrer" />
            <div className="text-xl font-bold text-[#846CAD]">LAVA AKY Lavanderia de Autoatendimento</div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#planos" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">PLANOS</a>
            <a href="#b2b" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">CNPJ/CONDOMÍNIOS</a>
            <a href="#unidades" className="text-stone-700 hover:text-[#CB2E50] font-bold uppercase">UNIDADES</a>
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
                src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/grok-video-a7e6f9ad-aa7d-4a83-928f-72ac936ace74.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvZ3Jvay12aWRlby1hN2U2ZjlhZC1hYTdkLTRhODMtOTI4Zi03MmFjOTM2YWNlNzQubXA0IiwiaWF0IjoxNzcyNzU4MDc2LCJleHAiOjIwNTY1ODIwNzZ9.yUwq3rewcUU5zZKqaIQz-5SbOSVaBFMwzTdd7G47dnk"
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
              Roupas impecáveis e <span className="text-[#846CAD]">mais tempo para você</span> na Lava aky!
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              A Lava aky não é apenas uma lavanderia de autoatendimento; entregamos praticidade, economia e uma experiência transformadora no cuidado com as suas roupas.
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
      <section id="depoimentos" className="bg-stone-900 text-white p-12 rounded-3xl max-w-7xl mx-auto my-16">
        <h2 className="text-4xl font-bold text-center mb-4">Quem confia, recomenda.</h2>
        <p className="text-center text-stone-400 mb-12">Avaliação 5 estrelas no Google</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { nome: 'Janaina Redü', texto: 'Os edredons foram entregues impecáveis pareciam ser novos. E o perfume ficou dentro do carro, muito bom.' },
            { nome: 'Gabriela Marini', texto: 'Serviço rápido, bem feito, preço justo. Lavamos dois cobertores de casal super grossos e ficaram limpíssimos e cheirosos.' },
            { nome: 'Cristian Rafael Campos', texto: 'Melhor da cidade! Atendimento excelente, produtos da melhor qualidade e preço muito barato.' },
          ].map((depoimento, index) => (
            <div key={index} className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
              <div className="flex text-[#E2BA59] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-300 italic mb-6">"{depoimento.texto}"</p>
              <p className="font-bold text-white mb-1">{depoimento.nome}</p>
              <a href="https://www.google.com/search?q=Lava+aky+Pelotas" target="_blank" rel="noopener noreferrer" className="text-sm text-[#846CAD] hover:underline">Avaliação no Google</a>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="https://www.google.com/search?q=Lava+aky+Pelotas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-200 transition shadow-lg">
            <Star size={20} fill="currentColor" /> Deixar avaliação no Google
          </a>
          <a href="https://www.google.com/search?q=Lava+aky+Pelotas" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#846CAD] hover:underline">
            Ver todas as avaliações →
          </a>
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
      <section id="valores-delivery" className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">VALORES E DELIVERY</h2>
          <div className="bg-[#E2BA59] text-stone-900 p-8 rounded-3xl mb-12 inline-block">
            <p className="text-xl font-bold">LAVE OU SEQUE</p>
            <p className="text-lg">Por Apenas</p>
            <p className="text-6xl font-bold">R$ 17,98</p>
          </div>
          
          <div className="space-y-4 mb-12 text-lg">
            <p>👉 Vantagens exclusivas:</p>
            <p>• Acima de 4 clientes, o DELIVERY É GRATUITO 🚚</p>
            <p>• Serviço de dobragem como BRINDE 🩳</p>
            <p>• Retiradas sempre às segundas e quintas-feiras</p>
            <p>• Entrega em até 24h após a coleta ⚡</p>
            <p>• Lavagem expressa com todo cuidado e agilidade</p>
          </div>

          <h3 className="text-3xl font-bold mb-8">EM CASA X LAVA AKY</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="bg-white text-stone-900 p-8 rounded-3xl w-full md:w-64">
              <p className="font-bold text-xl mb-4">EM CASA</p>
              <ul className="text-left space-y-2">
                <li>• agua</li>
                <li>• luz</li>
                <li>• estender</li>
                <li>• passar</li>
                <li>• produtos</li>
              </ul>
            </div>
            <span className="text-4xl font-bold">X</span>
            <div className="bg-white text-stone-900 p-8 rounded-3xl w-full md:w-64">
              <p className="font-bold text-xl mb-4">LAVA AKY</p>
              <p className="font-bold text-lg">tudo incluso no valor</p>
            </div>
          </div>

          <div className="space-y-2 mb-12">
            <p>• Você economiza água, luz e produtos 💧⚡🧴</p>
            <p>• Não precisa se preocupar em lavar, estender, passar e dobrar 🩳</p>
          </div>

          <a href="https://wa.me/5553991222096" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-2xl font-bold hover:scale-105 transition shadow-lg">
            <MessageCircle size={32} /> 53 99122-2096
          </a>
        </div>
      </section>

      {/* Matemática Real */}
      <section id="matematica-real" className="py-16 bg-stone-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#846CAD]">A Matemática Real: O custo oculto da sua área de serviço</h2>
          <img 
            src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/matematica-real.png" 
            alt="A Matemática Real" 
            className="w-full rounded-3xl shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Infográfico de Valor */}
        <section id="valor" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#846CAD]">O Retorno do Tempo: Seu recurso mais valioso.</h2>
            <p className="text-lg text-stone-700 mb-4"><strong>Em Casa:</strong> 3 a 5 horas perdidas por semana com o ciclo interminável de separar, lavar, estender, esperar secar, recolher e passar.</p>
            <p className="text-lg text-stone-700"><strong>Solução Lava aky:</strong> Apenas 1 a 1,5 hora total. Lavagem rápida, secagem eficiente e roupas prontas para uso.</p>
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
                <span>Na Lava aky (custo/mês)</span>
                <span className="font-bold text-[#846CAD]">~ R$ 144</span>
              </div>
            </div>
          </div>
        </section>

        {/* Grade de Planos */}
        <section id="planos">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#846CAD]">PLANOS E PACOTES LAVA AKY</h2>
          <p className="text-center text-xl font-semibold text-stone-800 mb-6">Rotina leve, bolso cheio.</p>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            A Lava aky não é apenas uma lavanderia de autoatendimento, nós entregamos praticidade no seu dia-a-dia, economia e uma experiência que transformadora ao de cuidar das suas roupas.
            <br /><br />
            Oferecemos Pacotes de Uso, buscando o máximo de conveniência e o melhor custo-benefício. Você pode lavar e secar seus cestos de roupa com descontos progressivos, garantindo o cuidado com suas roupas.
            <br /><br />
            Venha para Lava aky Lavanderia e escolha o pacote ideal para manter suas roupas sempre em dia!
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
        <section id="b2b" className="bg-stone-900 text-white p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-6 text-center">PLANOS E PACOTES LAVA AKY PARA CNPJ</h2>
          <p className="text-lg mb-12 text-center max-w-2xl mx-auto">A Lava aky tem uma solução para todo tipo de negócio.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Hospedagem (Hotéis e Airbnbs)', desc: 'Para o cuidado constante com roupas de cama, mesa e banho.' },
              { title: 'Serviços (Salões de Beleza e Clínicas)', desc: 'Higiene e apresentação profissional de toalhas e uniformes.' },
              { title: 'Comércios e Empresas', desc: 'Lavagem regular de uniformes de funcionários e outros itens têxteis.' },
            ].map(item => (
              <div key={item.title} className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
                <CheckCircle className="text-[#E2BA59] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clube de Fidelidade */}
        <section id="fidelidade" className="grid md:grid-cols-2 gap-12 items-center bg-[#846CAD] text-white p-12 rounded-3xl">
          <div>
            <h2 className="text-4xl font-bold mb-6">Clube de Fidelidade e Mimos</h2>
            <p className="text-lg mb-8">A cada 10 ciclos completos, ganhe 1 secagem. A cada 20 ciclos, ganhe 1 BAG exclusiva.</p>
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <p className="font-bold text-xl">🎁 Presente de Aniversário: No seu mês, a Lava aky reserva um presente especial para você!</p>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-[#846CAD]">Nossa Unidade</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-stone-800">Endereço: R. Andrade Neves, 3061 - Centro, Pelotas - RS, 96020-080</p>
              <p className="text-lg font-semibold text-stone-800">Telefone: (53) 99122-2096</p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=R.+Andrade+Neves,+3061+-+Centro,+Pelotas+-+RS,+96020-080" 
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
                alt="Localização Lava aky" 
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

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#846CAD]">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Como funciona a Lava aky?', a: 'Você traz suas roupas, utiliza nossas máquinas de alta performance e em pouco tempo tudo está limpo e seco.' },
              { q: 'Preciso levar sabão?', a: 'Não! Nossas máquinas dosam automaticamente produtos profissionais de alta qualidade.' },
              { q: 'Quanto tempo demora?', a: 'O ciclo completo de lavagem e secagem leva cerca de 1 hora e meia.' },
              { q: 'Posso lavar edredons?', a: 'Sim, nossas máquinas têm capacidade para edredons de casal e king size.' },
              { q: 'Como faço o pagamento?', a: 'Aceitamos cartões de crédito, débito e PIX.' },
              { q: 'Tem estacionamento?', a: 'Sim, estamos em local estratégico com facilidade para estacionar.' },
              { q: 'Posso deixar a roupa e buscar depois?', a: 'Sim, oferecemos serviço de coleta e entrega para sua comodidade.' },
              { q: 'As máquinas são fáceis de usar?', a: 'Muito! Nossa equipe dá todo o suporte necessário e temos instruções claras no local.' },
              { q: 'O ambiente é seguro?', a: 'Sim, nosso espaço é monitorado e seguro para sua tranquilidade.' },
              { q: 'Vocês atendem empresas?', a: 'Sim, temos planos especiais para CNPJ, hotéis, clínicas e condomínios.' },
            ].map((item, index) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={index} className="bg-white rounded-2xl shadow border border-stone-100">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-[#846CAD]"
                  >
                    {item.q}
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-stone-600"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-06%20132651.png" alt="Lava aky Logo" className="h-16 mb-4" referrerPolicy="no-referrer" />
            <p className="flex items-center gap-2"><MapPin size={18}/> Rua Andrade Neves, 3061 - Pelotas/RS</p>
            <p className="flex items-center gap-2 mt-2"><Clock size={18}/> 07h às 22h</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <Instagram />
              <Facebook />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="flex items-center gap-2"><Phone size={18}/> 53 99122-2096</p>
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
