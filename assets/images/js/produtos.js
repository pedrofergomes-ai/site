const products = [
  { id: 'sensacoes-carvalho', name: 'Nobre Sensações Carvalho', category: 'envelhecida', price: 55.00, volume: '380ml', notes: 'Cachaça com graduação alcoólica mais baixa (39% vol.). Essencialmente leve, macia e elegante, possui leve toque amadeirado sem perder a essência da cachaça para destacar aromas e sabores. Foi premiada com Medalha de Ouro no Concurso de Vinhos e Destilados do Brasil em 2021.', img: 'assets/images/nobrecarvalho.jpeg' },
  { id: 'sensacoes-freijo', name: 'Nobre Sensações Freijó', category: 'envelhecida', price: 55.00, volume: '380ml', notes: 'Cachaça com graduação alcoólica mais baixa (39% vol.), leve, macia e elegante, com leve toque amadeirado. Foi premiada com Medalha de Prata no Concurso de Vinhos e Destilados do Brasil em 2023.', img: 'assets/images/nobrefreijó.jpeg' },
  { id: 'sensacoes-umburana', name: 'Nobre Sensações Umburana', category: 'envelhecida', price: 55.00, volume: '380ml', notes: 'Cachaça com graduação alcoólica mais baixa (39% vol.), leve, macia e elegante, com leve toque amadeirado. A versão Umburana foi premiada com Medalha de Prata no Concurso de Vinhos e Destilados do Brasil em 2021.', img: 'assets/images/nobreumburana.jpeg' },
  { id: 'vaqueiro', name: 'Nobre Vaqueiro', category: 'envelhecida', price: 250.00, volume: '750ml', notes: 'Cachaça Extra Premium com envelhecimento de 4 anos (2 anos em barril de carvalho francês e 2 anos em barril de carvalho americano). Graduação alcoólica de 44% vol., com perfil macio e intenso.', img: 'assets/images/vaqueiro.jpeg' },
  { id: 'arraia', name: 'Nobre Arraiá', category: 'envelhecida', price: 165.00, volume: '750ml', notes: 'Rótulo em xilogravura em resgate à festa junina raiz. Blend de cachaça envelhecida por 3 anos em carvalho europeu com cachaça envelhecida por 1 ano em bálsamo. Possui 41% de graduação alcoólica, perfil aromático com notas de mel e baunilha que destacam sua doçura e toques de especiarias.', img: 'assets/images/nobrearraia.jpeg' },
  { id: 'maracatu', name: 'Nobre Maracatu', category: 'envelhecida', price: 165.00, volume: '750ml', notes: 'Blend de 3 cachaças: a primeira é um blend de jaqueira e bálsamo descansado por 1 ano e meio em barril de carvalho americano; a segunda é uma cachaça envelhecida por 3 anos em carvalho europeu finalizada por 6 meses em barril de carvalho americano novo; e a terceira é uma cachaça premium de umburana vinda de barril usado finalizada por 3 meses em barril de umburana novo. Aroma convidativo, cor vibrante e sabor complexo.', img: 'assets/images/maracatu.jpeg' },
  { id: 'cristal-500', name: 'Nobre Cristal', category: 'branca', price: 45.00, volume: '500ml', notes: 'Branquinha arretada, leveduras selecionadas nordestinas, descansa 8 meses em inox.', img: 'assets/images/nobrecristal.jpeg' },
  { id: 'arretada-vaquejada-500', name: 'Arretada Vaquejada', category: 'envelhecida', price: 85.00, volume: '500ml', notes: 'Blend de cachaças envelhecidas por 3 anos em carvalho europeu, jaqueira e jequitibá rosa.', img: 'assets/images/nobrearretada500.jpeg' },
  { id: 'umburana-500', name: 'Nobre Umburana', category: 'envelhecida', price: 55.00, volume: '500ml', notes: '100% umburana, notas de baunilha e canela, medalha de ouro em 2020.', img: 'assets/images/umburana.jpeg' },
  { id: 'arretada-vaquejada-750', name: 'Arretada Vaquejada', category: 'envelhecida', price: 125.00, volume: '750ml', notes: 'Blend complexo de carvalho europeu, jaqueira e jequitibá rosa.', img: 'assets/images/nobrearretada.jpeg' },
  { id: 'raiz-48', name: 'Nobre Raíz 48', category: 'branca', price: 100.00, volume: '750ml', notes: '48% vol., extremamente aromática e equilibrada. Lote 1 com apenas 400 garrafas.', img: 'assets/images/raiz48.jpeg' },
  { id: 'ocean', name: 'Nobre Ocean', category: 'envelhecida', price: 100.00, volume: '750ml', notes: 'Blend em bálsamo e umburana, toque sutil para retirar o amargor final.', img: 'assets/images/ocean.jpeg' },
  { id: 'rum-corsario-40', name: 'Rum Corsário 40%', category: 'rum', price: 140.00, volume: '750ml', notes: 'Envelhecido por 2 anos em carvalho americano novo. Mais leve, adocicado e defumado.', img: 'assets/images/rumcorsario.jpeg' },
  { id: 'rum-corsario-50', name: 'Rum Corsário 50%', category: 'rum', price: 180.00, volume: '750ml', notes: 'Envelhecido por 2 anos em carvalho americano novo. Más intenso em aromas e sabores.', img: 'assets/images/rumcorsario50.jpeg' }
];

const grid = document.getElementById('product-grid');
const noResults = document.getElementById('no-results');
const counterEl = document.getElementById('product-counter');

function money(v) { return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }

function renderProducts(list) {
  grid.innerHTML = '';
  noResults.classList.toggle('hidden', list.length > 0);
  counterEl.textContent = `Mostrando ${list.length} ${list.length === 1 ? 'rótulo' : 'rótulos'}`;
  
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-white text-gray-900 rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-canaLight transition-all duration-300 flex flex-col justify-between group cursor-pointer';
    card.innerHTML = `
      <div class="product-trigger" data-id="${p.id}">
        <div class="bg-gray-50 rounded-2xl py-6 mb-6 h-56 flex items-center justify-center relative overflow-hidden border border-gray-100">
          <div class="absolute inset-0 bg-gradient-to-b from-canaLight/5 to-transparent rounded-2xl opacity-60"></div>
          <img src="${p.img}" alt="${p.name}" class="max-h-full w-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-500 relative z-10">
        </div>
        <h3 class="text-lg font-bold text-gray-900 group-hover:text-canaGreen transition-colors">${p.name}</h3>
        <p class="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-2">${p.notes}</p>
        <div class="mt-4">
          <span class="text-2xl font-extrabold text-gray-900">${money(p.price)}</span>
        </div>
      </div>
      <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider product-trigger hover:text-gray-900 transition-colors" data-id="${p.id}">VER DETALHES →</span>
        <button data-id="${p.id}" class="add-to-cart px-4 py-2 rounded-xl bg-canaLight hover:bg-canaGreen text-white font-bold text-xs transition-all shadow-sm">
          Adicionar
        </button>
      </div>`;
    grid.appendChild(card);
  });
}
renderProducts(products);

const productModal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalCategory = document.getElementById('modal-category');
const modalName = document.getElementById('modal-name');
const modalVolume = document.getElementById('modal-volume');
const modalNotes = document.getElementById('modal-notes');
const modalPrice = document.getElementById('modal-price');
const modalAddBtn = document.getElementById('modal-add-btn');
let activeModalProductId = null;

function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  activeModalProductId = p.id;
  modalImg.src = p.img;
  modalImg.alt = p.name;
  modalCategory.textContent = p.category.toUpperCase();
  modalName.textContent = p.name;
  modalVolume.textContent = p.volume;
  modalNotes.textContent = p.notes;
  modalPrice.textContent = money(p.price);
  productModal.classList.remove('modal-hidden');
}

function closeProductModal() {
  productModal.classList.add('modal-hidden');
}

document.getElementById('product-modal-close').addEventListener('click', closeProductModal);
document.getElementById('product-modal-backdrop').addEventListener('click', closeProductModal);

modalAddBtn.addEventListener('click', () => {
  if (activeModalProductId) {
    addToCart(activeModalProductId);
    closeProductModal();
  }
});

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.product-trigger');
  if (trigger) {
    openProductModal(trigger.dataset.id);
    return;
  }
  const addBtn = e.target.closest('.add-to-cart');
  if (addBtn) {
    addToCart(addBtn.dataset.id);
    e.stopPropagation();
  }
  const qtyBtn = e.target.closest('.qty-btn');
  if (qtyBtn) changeQty(qtyBtn.dataset.id, Number(qtyBtn.dataset.delta));
});

document.getElementById('filter-buttons').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('bg-canaGreen', 'text-white', 'shadow-sm');
    b.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
  });
  btn.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
  btn.classList.add('bg-canaGreen', 'text-white', 'shadow-sm');
  const f = btn.dataset.filter;
  renderProducts(f === 'todas' ? products : products.filter(p => p.category === f));
});

document.getElementById('search-input').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.notes.toLowerCase().includes(term));
  renderProducts(term ? filtered : products);
});

let cart = {};
const cartToggle = document.getElementById('cart-toggle');
const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsEl = document.getElementById('cart-items');
const cartEmptyEl = document.getElementById('cart-empty');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartCountEl = document.getElementById('cart-count');
const cartBadgeCount = document.getElementById('cart-badge-count');
const checkoutBtn = document.getElementById('checkout-btn');

function openCart() {
  cartPanel.classList.remove('closed');
  cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
}
function closeCart() {
  cartPanel.classList.add('closed');
  cartOverlay.classList.add('opacity-0', 'pointer-events-none');
}
cartToggle.addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(id) { cart[id] = (cart[id] || 0) + 1; renderCart(); openCart(); }
function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function renderCart() {
  const ids = Object.keys(cart);
  cartItemsEl.innerHTML = '';
  cartEmptyEl.classList.toggle('hidden', ids.length > 0);
  cartItemsEl.classList.toggle('hidden', ids.length === 0);

  let subtotal = 0, totalQty = 0;
  ids.forEach(id => {
    const p = products.find(x => x.id === id);
    const qty = cart[id];
    subtotal += p.price * qty;
    totalQty += qty;
    const row = document.createElement('div');
    row.className = 'flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100';
    row.innerHTML = `
      <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-200/60 p-1">
        <img src="${p.img}" alt="${p.name}" class="h-10 w-auto object-contain">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-bold text-gray-900 truncate">${p.name}</p>
        <p class="text-xs text-gray-500">${money(p.price)} un</p>
      </div>
      <div class="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-gray-200">
        <button class="qty-btn w-6 h-6 rounded-lg text-gray-600 hover:bg-gray-100 flex items-center justify-center font-bold" data-id="${id}" data-delta="-1">−</button>
        <span class="w-5 text-center text-sm font-bold">${qty}</span>
        <button class="qty-btn w-6 h-6 rounded-lg text-gray-600 hover:bg-gray-100 flex items-center justify-center font-bold" data-id="${id}" data-delta="1">+</button>
      </div>`;
    cartItemsEl.appendChild(row);
  });

  cartSubtotalEl.textContent = money(subtotal);
  checkoutBtn.disabled = ids.length === 0;
  if (totalQty > 0) {
    cartCountEl.textContent = totalQty;
    cartCountEl.classList.remove('hidden');
    cartBadgeCount.textContent = `${totalQty} ${totalQty === 1 ? 'item' : 'itens'}`;
  } else {
    cartCountEl.classList.add('hidden');
    cartBadgeCount.textContent = '0 itens';
  }
}

const checkoutModal = document.getElementById('checkout-modal');
const checkoutSummary = document.getElementById('checkout-summary');
const WHATSAPP_NUMBER = '5583996818192';

function buildSummary() {
  let lines = [], subtotal = 0;
  Object.keys(cart).forEach(id => {
    const p = products.find(x => x.id === id);
    const qty = cart[id];
    subtotal += p.price * qty;
    lines.push(`${qty}x ${p.name}`);
  });
  return { lines, subtotal };
}

checkoutBtn.addEventListener('click', () => {
  const { subtotal } = buildSummary();

  checkoutSummary.innerHTML = `
    <div class="flex justify-between items-center font-bold text-gray-900 mb-1">
      <span>Itens na Sacola (${Object.keys(cart).length}):</span>
      <span>${money(subtotal)}</span>
    </div>
    <div class="pt-2 mt-2 border-t border-gray-200 flex justify-between items-center font-extrabold text-base text-gray-900">
      <span>Total Geral:</span>
      <span class="text-canaGreen">${money(subtotal)}</span>
    </div>`;
  checkoutModal.classList.remove('modal-hidden');
  closeCart();
});

function closeCheckout() { checkoutModal.classList.add('modal-hidden'); }
document.getElementById('checkout-close').addEventListener('click', closeCheckout);
document.getElementById('checkout-backdrop').addEventListener('click', closeCheckout);

const cepInput = document.getElementById('ck-cep');

cepInput.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '');
  if (val.length > 5) {
    val = val.substring(0, 5) + '-' + val.substring(5, 8);
  }
  e.target.value = val;
});

cepInput.addEventListener('blur', async (e) => {
  const cep = e.target.value.replace(/\D/g, '');
  if (cep.length === 8) {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      
      if (!data.erro) {
        document.getElementById('ck-street').value = data.logradouro || '';
        document.getElementById('ck-neighborhood').value = data.bairro || '';
        document.getElementById('ck-city').value = `${data.localidade} - ${data.uf}`;
        document.getElementById('ck-number').focus();
      } else {
        alert('CEP não encontrado. Por favor, verifique e tente novamente.');
      }
    } catch (err) {
      console.error('Erro ao buscar o CEP:', err);
    }
  }
});

document.querySelectorAll('.pay-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active', 'bg-canaGreen', 'text-white'));
    document.querySelectorAll('.pay-tab').forEach(t => t.classList.add('text-gray-600'));
    tab.classList.add('active');
    tab.classList.remove('text-gray-600');
    const mode = tab.dataset.pay;
    document.getElementById('pay-panel-pix').classList.toggle('hidden', mode !== 'pix');
    document.getElementById('pay-panel-cartao').classList.toggle('hidden', mode !== 'cartao');
    document.getElementById('pay-panel-boleto').classList.toggle('hidden', mode !== 'boleto');
  });
});

document.getElementById('pix-copy').addEventListener('click', () => {
  const key = document.getElementById('pix-key').textContent;
  navigator.clipboard.writeText(key).then(() => {
    const btn = document.getElementById('pix-copy');
    btn.textContent = 'Copiado!';
    setTimeout(() => btn.textContent = 'Copiar Chave', 2000);
  });
});

const inputCardNum = document.getElementById('card-number');
const inputCardName = document.getElementById('card-name');
const inputCardExpiry = document.getElementById('card-expiry');

inputCardNum.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '').substring(0, 16);
  e.target.value = val.match(/.{1,4}/g)?.join(' ') || '';
  document.getElementById('preview-number').textContent = e.target.value || '•••• •••• •••• ••••';
});

inputCardName.addEventListener('input', (e) => {
  document.getElementById('preview-name').textContent = e.target.value.toUpperCase() || 'NOME DO TITULAR';
});

inputCardExpiry.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 3) val = val.substring(0, 2) + '/' + val.substring(2);
  e.target.value = val;
  document.getElementById('preview-expiry').textContent = val || 'MM/AA';
});

function validateAddressAndData() {
  const name = document.getElementById('ck-name').value.trim();
  const phone = document.getElementById('ck-phone').value.trim();
  const cep = document.getElementById('ck-cep').value.trim();
  const street = document.getElementById('ck-street').value.trim();
  const number = document.getElementById('ck-number').value.trim();
  const neighborhood = document.getElementById('ck-neighborhood').value.trim();
  const city = document.getElementById('ck-city').value.trim();

  if (!name || !phone || !cep || !street || !number || !neighborhood || !city) {
    alert('Por favor, preencha todos os campos obrigatórios do comprador e do endereço de entrega.');
    return null;
  }

  return {
    name,
    phone,
    email: document.getElementById('ck-email').value.trim(),
    address: `${street}, Nº ${number} ${document.getElementById('ck-complement').value ? '- ' + document.getElementById('ck-complement').value : ''}, Bairro: ${neighborhood}, ${city} (CEP: ${cep})`
  };
}

function processCheckoutIntegration(paymentMethod, extraData = {}) {
  const customer = validateAddressAndData();
  if (!customer) return;

  const { lines, subtotal } = buildSummary();

  const apiPayload = {
    customer,
    items: cart,
    subtotal,
    paymentMethod,
    extraData
  };

  let msg = [
    `*📦 Novo Pedido - Engenho Nobre*`,
    ``,
    `*Cliente:* ${customer.name}`,
    `*WhatsApp:* ${customer.phone}`,
    `*Endereço de Entrega:*`,
    `${customer.address}`,
    ``,
    `*Itens:*`,
    ...lines,
    ``,
    `*Total:* ${money(subtotal)}`,
    `*(O frete será calculado e informado pelo atendente)*`,
    `*Pagamento:* ${paymentMethod}`
  ];

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg.join('\n'))}`, '_blank');
  closeCheckout();
}

document.getElementById('checkout-send-pix').addEventListener('click', () => processCheckoutIntegration('PIX'));
document.getElementById('checkout-send-boleto').addEventListener('click', () => processCheckoutIntegration('Boleto Bancário'));
document.getElementById('checkout-send-card').addEventListener('click', () => {
  const cardName = document.getElementById('card-name').value.trim();
  const cardNumber = document.getElementById('card-number').value.trim();
  const cardExpiry = document.getElementById('card-expiry').value.trim();
  const cardCvv = document.getElementById('card-cvv').value.trim();

  if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
    alert('Preencha todos os dados do cartão de crédito ou débito.');
    return;
  }
  
  const installmentValue = document.getElementById('card-installments').value;
  const paymentLabel = installmentValue === 'debito' ? 'Cartão de Débito' : 'Cartão de Crédito';
  
  processCheckoutIntegration(paymentLabel, { installments: installmentValue });
});