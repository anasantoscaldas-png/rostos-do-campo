// Base de dados com foco na narrativa e detalhes humanos
const historias = [
    {
        id: 1,
        nome: "Dona Maria da Silva",
        local: "Sítio Boa Vista — Interior de SP",
        relato: "Crio minhas três filhas com o cultivo de morangos orgânicos. Cada caixa que viaja para a cidade leva mais do que frutas; carrega junto a dedicação e o sonho de ver minha caçula se formar na faculdade.",
        imagem: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80",
        tag: "Agricultura Familiar"
    },
    {
        id: 2,
        nome: "Seu Francisco Oliveira",
        local: "Cooperativa Serrana — RS",
        relato: "O trigo que cuidamos aqui vira o pão fresco das padarias da capital. Quando o inverno aperta, olho para a plantação sabendo que há alguém na cidade se aquecendo e começando o dia com o fruto do nosso suor.",
        imagem: "https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&w=600&q=80",
        tag: "Tradição Viva"
    },
    {
        id: 3,
        nome: "Família Santos",
        local: "Assentamento Primavera — BA",
        relato: "Nosso cacau agroflorestal ajudou a recuperar a mata nativa. Quando uma criança na cidade saboreia um chocolate feito aqui, ela se torna parte da nossa resistência e do cuidado com a floresta.",
        imagem: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=600&q=80",
        tag: "Sustentabilidade"
    }
];

// Injeta as histórias no contêiner correto
function exibirHistorias() {
    const mural = document.getElementById('container-historias');
    
    // Evita rodar o script se o elemento não existir na página atual
    if (!mural) return;

    mural.innerHTML = ""; 

    historias.forEach(item => {
        const card = `
            <article class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-200/60 flex flex-col group">
                <div class="overflow-hidden h-52 relative">
                    <img src="${item.imagem}" alt="Fotografia de ${item.nome}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <span class="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-sm text-amber-100 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        ${item.tag}
                    </span>
                </div>
                <div class="p-8 flex-grow flex flex-col justify-between">
                    <div>
                        <h4 class="text-2xl font-serif font-bold text-stone-900 mb-1 tracking-tight">${item.nome}</h4>
                        <p class="text-xs text-emerald-800 font-medium tracking-wide mb-5 flex items-center gap-1">
                            <span>📍</span> ${item.local}
                        </p>
                        <p class="text-stone-600 font-light italic leading-relaxed text-[15px]">
                            "${item.relato}"
                        </p>
                    </div>
                </div>
            </article>
        `;
        mural.innerHTML += card;
    });
}

// Inicializa a renderização assim que a página estiver carregada
document.addEventListener('DOMContentLoaded', exibirHistorias);
