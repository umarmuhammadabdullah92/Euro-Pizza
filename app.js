
  const fastFoodMenu = [
    { code:"FR", cat:"Fried Corner", slug:"fried-corner", items:[
      {name:"Double Decker Burger", price:700},
      {name:"Tower Burger", price:690},
      {name:"Tender Fillet Burger", price:520},
      {name:"Zinger Burger", price:440},
      {name:"Zinger Cheese Burger", price:510},
      {name:"Chicken Petty Burger", price:330},
      {name:"Petty Cheese Burger", price:400},
      {name:"Chapli Burger", price:350},
      {name:"Chapli Cheese Burger", price:420},
      {name:"Hot Wings (6 Pcs)", price:410},
      {name:"Hot Wings (10 Pcs)", price:680},
      {name:"Nuggets (6 Pcs)", price:300},
      {name:"Nuggets (10 Pcs)", price:500},
      {name:"Mayo Fries (Small)", price:400},
      {name:"Mayo Fries (Large)", price:470},
      {name:"Fries (Small)", price:310},
      {name:"Fries (Large)", price:380},
      {name:"Cheese Slice", price:100},
    ]},
    { code:"SH", cat:"Shawarma & Paratha", slug:"shawarma-paratha", items:[
      {name:"Chicken Shawarma", price:290},
      {name:"Zinger Shawarma", price:410},
      {name:"B.B.Q Shawarma", price:390},
      {name:"Platter Shawarma", price:580},
      {name:"Zinger Paratha Roll", price:430},
      {name:"Fri Paratha Roll", price:430},
      {name:"Kebab Paratha Roll", price:300},
      {name:"Kebab Cheese Paratha", price:370},
    ]},
    { code:"RL", cat:"Rolls", slug:"rolls", items:[
      {name:"Spin Roll", price:600},
      {name:"Malai Boti Roll", price:650},
      {name:"Chilli Milli Roll", price:700},
    ]},
    { code:"OW", cat:"Oven Baked Wings", slug:"oven-baked-wings", items:[
      {name:"Peri-Peri Wings (6 Pcs)", price:480},
      {name:"Peri-Peri Wings (10 Pcs)", price:800},
      {name:"Oven Baked Wings (6 Pcs)", price:420},
      {name:"Oven Baked Wings (10 Pcs)", price:700},
      {name:"Chipotley Saucy Wings (5 Pcs)", price:430},
      {name:"Chipotley Saucy Wings (10 Pcs)", price:850},
    ]},
    { code:"WR", cat:"Special Wraps", slug:"special-wraps", items:[
      {name:"Special Wrap", price:500},
      {name:"B.B.Q Wrap", price:490},
      {name:"Garlic Mayo Wrap", price:490},
      {name:"Arabic Wrap", price:690},
    ]},
    { code:"PA", cat:"Oven Baked Pasta", slug:"oven-baked-pasta", items:[
      {name:"Al Frado Pasta", price:800},
      {name:"Creamy Pasta", price:740},
      {name:"Flaming Pasta", price:780},
      {name:"Crunchy Pasta", price:800},
    ]},
    { code:"SA", cat:"Sauces", slug:"sauces", items:[
      {name:"Dip Sauce", price:100},
      {name:"Burger Sauce", price:100},
      {name:"Special Sauce", price:100},
      {name:"Peri Peri Sauce", price:150},
    ]},
    { code:"PL", cat:"Special Platters & Broast", slug:"special-platters-broast", items:[
      {name:"Special Platter", price:1170, desc:"6pc Oven Baked Wings, 4pc Spin Roll, 1 Small Fries, 1 Dip Sauce"},
      {name:"Malai Boti Platter", price:1250, desc:"6pc Malai Boti Wings, 4pc Malai Boti Roll, 1 Small Fries, 1 Dip Sauce"},
      {name:"Chicken Broast (Single)", price:1250, desc:"1 Leg, 1 Thigh, 1 Wing, 1 Breast, 1 Garlic Dip, 1 Bun"},
      {name:"Chicken Broast (Double)", price:2450, desc:"2 Leg, 2 Thigh, 2 Wing, 2 Breast, 2 Garlic Dip, 2 Bun"},
      {name:"Pizza Fries", price:750},
      {name:"Chicken Loaded Fries", price:670},
    ]},
    { code:"HH", cat:"Half & Half Pizza", slug:"half-half-pizza", items:[
      {name:"2 Small Pizzas", price:1350, desc:"Any 2 Small regular pizzas"},
      {name:"2 Medium Pizzas", price:2460, desc:"Any 2 Medium regular pizzas"},
      {name:"2 Large Pizzas", price:3280, desc:"Any 2 Large regular pizzas"},
      {name:"2 Family Pizzas", price:4880, desc:"Any 2 Family regular pizzas"},
    ]},
  ];

  const pizzaGroups = [
    { code:"RP", cat:"Regular Pizzas", slug:"regular-pizzas",
      sizePrices:{S:720,M:1290,L:1750,F:2670},
      items:["Chicken Lover","Cheese Lover","Chicken Tikka","Fajita Pizza","Chicken Supreme","Vegetable Pizza","Hot & Spicy Pizza","Chicken Euro"] },
    { code:"SP", cat:"Our Special Pizzas", slug:"our-special-pizzas",
      sizePrices:{S:850,M:1450,L:1950,F:2750},
      items:["Euro Special Pizza","Bone Fire Pizza","Chicken Extreme Pizza","Peri Peri Pizza","Malai Pizza","Achari Pizza"] },
    { code:"CS", cat:"Crust & Stuffed Pizzas", slug:"crust-stuffed-pizzas",
      sizePrices:{M:1550,L:2050,F:2850},
      items:["Kebab Crust Pizza","Cheese Crust Pizza","Chicken Stuffer Pizza","Behari Kebab Pizza"],
      extra:[{name:"Crown Crust Pizza", sizePrices:{M:1650,L:2150,F:2950}},{name:"Loaded Pizza", sizePrices:{L:2400}}] },
  ];
  const sizeLabels = {S:"Small", M:"Medium", L:"Large", F:"Family"};

  const deals = [
    { tag:"Occasion", name:"Birthday Deal", desc:"2 XL Euro Special Pizza, 2 Zinger Burgers, 10 Nuggets, Large Fries, 2x1.5L Drink", price:7360, img:"images/deal-birthday-deal.jpg" },
    { tag:"Meal Deal", name:"Papa Deal", desc:"Large Euro Special Pizza, 10 Hot Wings, 1.5L Drink", price:2630, img:"images/deal-papa-deal.jpg" },
    { tag:"Meal Deal", name:"Deal 1", desc:"Small Regular Pizza, Creamy Pasta, 500ml Drink", price:1460, img:"images/deal-deal-1.jpg" },
    { tag:"Meal Deal", name:"Deal 2", desc:"Medium Regular Pizza, 6 Hot Wings, 1L Drink", price:1710, img:"images/deal-deal-2.jpg" },
    { tag:"Meal Deal", name:"Deal 3", desc:"Large Regular Pizza, Small Pizza, 1.5L Drink", price:2470, img:"images/deal-deal-3.jpg" },
    { tag:"Meal Deal", name:"Deal 4", desc:"Large Regular Pizza, 2 Zinger Burgers, 2 Petty Burgers, 1.5L Drink", price:3310, img:"images/deal-deal-4.jpg" },
    { tag:"Meal Deal", name:"Deal 5", desc:"Crown Crust Pizza, 2 Medium Pizzas, Large Fries, 1L Drink", price:3680, img:"images/deal-deal-5.jpg" },
    { tag:"Meal Deal", name:"Deal 6", desc:"Medium Euro Special Pizza, Special Platter, 1L Drink", price:2620, img:"images/deal-deal-6.jpg" },
    { tag:"Meal Deal", name:"Deal 7", desc:"2 Special Small Pizzas, 500ml Drink", price:1690, img:"images/deal-deal-7.jpg" },
    { tag:"Meal Deal", name:"Deal 8", desc:"Large Euro Special Pizza, Medium Pizza, 10 Wings, Large Fries, 2x1.5L Drink", price:4690, img:"images/deal-deal-8.jpg" },
    { tag:"Meal Deal", name:"Deal 9", desc:"4 Zinger Burgers, Large Fries, 1.5L Drink", price:2180, img:"images/deal-deal-9.jpg" },
    { tag:"Kids", name:"Deal 10 (Kids Enjoy)", desc:"10 Nuggets, Large Fries, Small Pizza, 500ml Drink", price:1580, img:"images/deal-deal-10-kids-enjoy.jpg" },
  ];

  function formatPrice(n){ return 'Rs. ' + n.toLocaleString('en-PK'); }
  function slugify(name){ return name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

  const ICONS = {
    FR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><rect x="4" y="6" width="16" height="6" rx="3"/><path d="M7 12v2a5 5 0 0010 0v-2"/><circle cx="8.5" cy="9" r="0.7" fill="currentColor" stroke="none" opacity="0.5"/><circle cx="12" cy="8" r="0.7" fill="currentColor" stroke="none" opacity="0.5"/><circle cx="15.5" cy="9" r="0.7" fill="currentColor" stroke="none" opacity="0.5"/></svg>',
    SH:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8l2 6H6l2-6z"/><path d="M6 10l1 10h10l1-10"/><path d="M9 10v8"/><path d="M15 10v8"/><path d="M8 14h8"/></svg>',
    RL:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9a7 7 0 0114 0"/><path d="M5 9c0 2 3 3 7 3s7-1 7-3"/><path d="M5 9v4c0 2 3 3 7 3s7-1 7-3V9"/><path d="M8 16l-1 4h10l-1-4"/></svg>',
    OW:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-2 0-3.5 1-4 3-.5 2 0 4 1 5l3 3 3-3c1-1 1.5-3 1-5-.5-2-2-3-4-3z"/><path d="M10 12l-2 4c-.5 1-.2 2.5 1 3 1 .5 2.2.2 3-.5"/><path d="M14 12l2 4c.5 1 .2 2.5-1 3-1 .5-2.2.2-3-.5"/></svg>',
    WR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16"/><path d="M5 8l1 10h12l1-10"/><path d="M8 8v3c0 2 2 3 4 3s4-1 4-3V8"/><path d="M7 8c1-3 3-4 5-4s4 1 5 4"/></svg>',
    PA:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h16"/><path d="M4 14c0 3 3 5 8 5s8-2 8-5"/><path d="M4 14V8c0-1 1-2 2-2h12c1 0 2 1 2 2v6"/><path d="M8 8c0-2 1-3 1-4"/><path d="M12 8c0-2 .5-3 .5-4"/><path d="M16 8c0-2-1-3-1-4"/></svg>',
    SA:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4v2l1 2H9l1-2z"/><path d="M8 6h8l-1 5H9l-1-5z"/><path d="M9 11l-1 8h8l-1-8"/><path d="M10 19h4"/></svg>',
    PL:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="14" rx="9" ry="4"/><path d="M12 10V5"/><path d="M9 5h6"/><path d="M3 14v2c0 2.2 4 4 9 4s9-1.8 9-4v-2"/></svg>',
    PZ:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="10" cy="8.5" r="1" fill="currentColor" stroke="none" opacity="0.5"/><circle cx="15" cy="10.5" r="1" fill="currentColor" stroke="none" opacity="0.5"/><circle cx="9.5" cy="14" r="1" fill="currentColor" stroke="none" opacity="0.5"/><circle cx="14.5" cy="15" r="0.8" fill="currentColor" stroke="none" opacity="0.4"/></svg>'
  };
  ICONS.RP=ICONS.PZ; ICONS.SP=ICONS.PZ; ICONS.CS=ICONS.PZ; ICONS.HH=ICONS.PZ;

  /* ===== CART STATE ===== */
  const CART_KEY = 'euro-pizza-cart';
  const CART_META_KEY = 'euro-pizza-cart-meta';
  let order = {};
  let cartMode = 'delivery';
  let deliveryAddress = '';
  let specialInstructions = '';

  function loadCart(){
    try {
      const saved = localStorage.getItem(CART_KEY);
      if(saved) order = JSON.parse(saved);
      const meta = localStorage.getItem(CART_META_KEY);
      if(meta){ const m = JSON.parse(meta); cartMode = m.mode || 'delivery'; deliveryAddress = m.address || ''; specialInstructions = m.instructions || ''; }
    } catch(e){ order = {}; }
  }
  function saveCart(){
    try { localStorage.setItem(CART_KEY, JSON.stringify(order)); } catch(e){}
    try { localStorage.setItem(CART_META_KEY, JSON.stringify({mode:cartMode, address:deliveryAddress, instructions:specialInstructions})); } catch(e){}
  }
  loadCart();

  function getQty(key){ return order[key] ? order[key].qty : 0; }
  function totalQty(){ return Object.values(order).reduce((a,b)=>a+b.qty, 0); }
  function totalPrice(){ return Object.values(order).reduce((a,b)=>a+b.qty*b.price, 0); }
  function setQty(key, qty, price, label){
    if(qty <= 0){ delete order[key]; }
    else { order[key] = { qty, price: price!=null?price:(order[key]?order[key].price:0), label: label||(order[key]?order[key].label:key) }; }
    saveCart();
    renderDrawer();
    syncMenuButtons();
    syncDealButtons();
    updateFab();
  }
  function addItem(key, price, label){
    setQty(key, getQty(key) + 1, price, label);
    showAddToast(label || key);
    bumpFab();
  }
  function removeItem(key){ setQty(key, getQty(key) - 1); }

  /* ===== ADD TO CART TOAST ===== */
  const addToast = document.getElementById('addToast');
  const addToastText = document.getElementById('addToastText');
  let addToastTimer;
  function showAddToast(text){
    addToastText.textContent = text + ' added';
    addToast.classList.add('show');
    clearTimeout(addToastTimer);
    addToastTimer = setTimeout(()=> addToast.classList.remove('show'), 1600);
  }

  /* ===== FAB ===== */
  const cartFab = document.getElementById('cartFab');
  const cartFabBadge = document.getElementById('cartFabBadge');
  const cartFabTotal = document.getElementById('cartFabTotal');
  function updateFab(){
    const q = totalQty();
    if(q > 0){
      cartFab.classList.add('visible');
      cartFabBadge.textContent = q;
      cartFabTotal.textContent = formatPrice(totalPrice());
      cartFabTotal.style.display = '';
    } else {
      cartFab.classList.remove('visible');
      cartFabTotal.style.display = 'none';
    }
  }
  function bumpFab(){
    cartFabBadge.classList.remove('bump');
    void cartFabBadge.offsetWidth;
    cartFabBadge.classList.add('bump');
  }
  updateFab();

  /* ===== DRAWER ===== */
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const drawerItems = document.getElementById('drawerItems');
  const drawerFooter = document.getElementById('drawerFooter');
  const drawerSubtotal = document.getElementById('drawerSubtotal');
  const addressInput = document.getElementById('addressInput');
  const instructionsInput = document.getElementById('instructionsInput');
  const drawerAddress = document.getElementById('drawerAddress');

  function openDrawer(){
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
    document.body.classList.add('drawer-open');
    addressInput.value = deliveryAddress;
    instructionsInput.value = specialInstructions;
    updateModeUI();
  }
  function closeDrawer(){
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
    document.body.classList.remove('drawer-open');
    deliveryAddress = addressInput.value.trim();
    specialInstructions = instructionsInput.value.trim();
    saveCart();
  }

  addressInput.addEventListener('input', ()=>{ deliveryAddress = addressInput.value.trim(); saveCart(); });
  instructionsInput.addEventListener('input', ()=>{ specialInstructions = instructionsInput.value.trim(); saveCart(); });

  document.getElementById('cartFabBtn').addEventListener('click', openDrawer);
  cartOverlay.addEventListener('click', closeDrawer);
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);

  /* ===== MODE TOGGLE ===== */
  document.getElementById('drawerMode').addEventListener('click', (e)=>{
    const btn = e.target.closest('.mode-btn');
    if(!btn) return;
    cartMode = btn.dataset.mode;
    document.querySelectorAll('#drawerMode .mode-btn').forEach(b=> b.classList.toggle('active', b===btn));
    updateModeUI();
    saveCart();
  });
  function updateModeUI(){
    const isDelivery = cartMode === 'delivery';
    drawerAddress.classList.toggle('show', isDelivery);
    document.querySelectorAll('#drawerMode .mode-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.mode === cartMode);
    });
  }

  /* ===== RENDER DRAWER ITEMS ===== */
  function buildOrderMessage(){
    const keys = Object.keys(order);
    if(!keys.length) return '';
    let lines = [];
    lines.push('*Euro Pizza — Order*');
    lines.push('Mode: ' + (cartMode === 'delivery' ? 'Home Delivery' : cartMode === 'dinein' ? 'Dine-In' : 'Takeaway'));
    if(cartMode === 'delivery' && deliveryAddress) lines.push('Address: ' + deliveryAddress);
    if(specialInstructions) lines.push('Note: ' + specialInstructions);
    lines.push('');
    keys.forEach(key => {
      const it = order[key];
      lines.push('• ' + it.label + ' x' + it.qty + ' — ' + formatPrice(it.qty * it.price));
    });
    lines.push('');
    lines.push('*Total: ' + formatPrice(totalPrice()) + '*');
    lines.push('');
    lines.push('Please confirm this order. Thank you!');
    return lines.join('\n');
  }

  function renderDrawer(){
    const keys = Object.keys(order);
    if(keys.length === 0){
      drawerItems.innerHTML = `
        <div class="drawer-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <p>Your order is empty</p>
          <small>Browse the menu and tap "Add" to get started</small>
        </div>`;
      drawerFooter.style.display = 'none';
      return;
    }
    drawerFooter.style.display = '';

    let html = '';
    keys.forEach(key => {
      const it = order[key];
      const lineTotal = it.qty * it.price;
      html += `
        <div class="drawer-item" data-dkey="${key}">
          <div class="drawer-item-info">
            <div class="drawer-item-name">${it.label}</div>
            <div class="drawer-item-meta">${formatPrice(it.price)} each</div>
          </div>
          <div class="drawer-item-stepper">
            <button data-dstep="-1" data-dkey="${key}" aria-label="Remove one">−</button>
            <span>${it.qty}</span>
            <button data-dstep="1" data-dkey="${key}" aria-label="Add one">+</button>
          </div>
          <div class="drawer-item-price">${formatPrice(lineTotal)}</div>
          <button class="drawer-item-remove" data-dremove="${key}" aria-label="Remove item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>`;
    });
    drawerItems.innerHTML = html;

    drawerSubtotal.textContent = formatPrice(totalPrice());

    /* Wire drawer steppers & remove */
    drawerItems.querySelectorAll('[data-dstep]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const k = btn.dataset.dkey;
        setQty(k, getQty(k) + parseInt(btn.dataset.dstep, 10));
      });
    });
    drawerItems.querySelectorAll('[data-dremove]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const k = btn.dataset.dremove;
        const el = drawerItems.querySelector(`[data-dkey="${k}"]`);
        if(el){ el.style.opacity='0'; el.style.transform='translateX(40px)'; el.style.transition='all .2s ease'; }
        setTimeout(()=> setQty(k, 0), 200);
      });
    });

    /* Update order summary links */
    updateOrderLinks();
  }

  function updateOrderLinks(){
    const msg = buildOrderMessage();
    const encoded = encodeURIComponent(msg);
    document.getElementById('drawerWA').href = 'https://wa.me/923059212996?text=' + encoded;
  }

  document.getElementById('drawerClear').addEventListener('click', ()=>{
    if(!confirm('Clear your entire order?')) return;
    Object.keys(order).forEach(k=> delete order[k]);
    saveCart();
    renderDrawer();
    syncMenuButtons();
    syncDealButtons();
    updateFab();
  });

  renderDrawer();

  const menuContent = document.getElementById('menuContent');
  /* ===== STEPPERS ON MENU CARDS ===== */
  function wireMenuStepper(stepperEl){
    const key = stepperEl.dataset.item;
    stepperEl.querySelectorAll('.step-btn').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        setQty(key, getQty(key) + parseInt(btn.dataset.step,10));
      });
    });
  }

  function syncMenuButtons(){
    document.querySelectorAll('.product-card').forEach(card=>{
      const holder = card.querySelector('.add-slot-wrap');
      if(!holder) return;
      if(card.dataset.pizza){
        const size = card.dataset.selectedSize;
        const price = parseInt(card.dataset['price'+size], 10);
        const key = `${card.dataset.pizza} (${sizeLabels[size]})`;
        holder.innerHTML = addSlotHtml(key, price, key);
      } else {
        const key = card.dataset.item;
        const price = parseFloat(card.dataset.price);
        holder.innerHTML = addSlotHtml(key, price, key);
      }
    });
    wireProductButtons();
  }

  function syncDealButtons(){
    document.querySelectorAll('.deal-card').forEach(card=>{
      const key = card.dataset.item;
      const price = parseFloat(card.dataset.price);
      const holder = card.querySelector('.add-slot-wrap');
      holder.innerHTML = addSlotHtml(key, price, key);
    });
    document.querySelectorAll('#dealsGrid [data-additem]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{ e.stopPropagation(); addItem(btn.dataset.additem, parseFloat(btn.dataset.price), btn.dataset.label); });
    });
    document.querySelectorAll('#dealsGrid .stepper').forEach(wireMenuStepper);
  }

  function addSlotHtml(key, price, label){
    const qty = getQty(key);
    if(qty > 0){
      return `<div class="stepper" data-item="${key}">
        <button class="step-btn" data-step="-1" aria-label="Remove one">−</button>
        <span class="step-qty">${qty}</span>
        <button class="step-btn" data-step="1" aria-label="Add one">+</button>
      </div>`;
    }
    return `<button class="add-btn" data-additem="${key}" data-price="${price}" data-label="${label.replace(/"/g,'&quot;')}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      Add to Order
    </button>`;
  }

  function wireProductButtons(){
    if(!menuContent) return;
    menuContent.querySelectorAll('[data-additem]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        addItem(btn.dataset.additem, parseFloat(btn.dataset.price), btn.dataset.label);
      });
    });
    menuContent.querySelectorAll('.stepper').forEach(wireMenuStepper);
    menuContent.querySelectorAll('.size-pill').forEach(pill=>{
      pill.addEventListener('click', (e)=>{
        e.stopPropagation();
        const card = pill.closest('.product-card');
        const size = pill.dataset.size;
        card.dataset.selectedSize = size;
        card.querySelectorAll('.size-pill').forEach(p=> p.classList.toggle('active', p===pill));
        const price = parseInt(card.dataset['price'+size], 10);
        card.querySelector('.price-row .pr').textContent = formatPrice(price);
        const priceTag = card.querySelector('.price-tag');
        if(priceTag) priceTag.textContent = formatPrice(price);
        const key = `${card.dataset.pizza} (${sizeLabels[size]})`;
        card.querySelector('.add-slot-wrap').innerHTML = addSlotHtml(key, price, key);
        wireProductButtons();
      });
    });
  }


  let activeSlug = 'regular-pizzas';

  /* ===== MENU PAGE (renders only when #menuContent exists) ===== */
  if(document.getElementById('menuContent')){
  /* ===== MENU RENDERING ===== */
  const pizzaCategories = pizzaGroups.map(g=>({
    code:g.code, cat:g.cat, slug:g.slug, isPizza:true, group:g,
    items: g.items.concat((g.extra||[]).map(e=>e.name))
  }));
  const menuCategories = pizzaCategories.concat(fastFoodMenu);

  const catTabs = document.getElementById('catTabs');

  function productCardSimple(item, slug, catLabel){
    const key = item.name;
    const imgSlug = slugify(item.name);
    return `
      <div class="product-card" data-item="${key}" data-price="${item.price}">
        <div class="product-photo">
          <div class="photo-wrap">
            <img src="images/item-${imgSlug}.jpg" alt="${item.name}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="photo-slot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
              <span>Add photo</span>
            </div>
            <span class="chip">${catLabel}</span>
            <span class="price-tag">${formatPrice(item.price)}</span>
          </div>
        </div>
        <div class="product-body">
          <div class="product-name">${item.name}</div>
          ${item.desc ? `<div class="product-desc">${item.desc}</div>` : ''}
          <div class="price-row"><span class="pr">${formatPrice(item.price)}</span></div>
          <div class="add-slot-wrap">${addSlotHtml(key, item.price, key)}</div>
        </div>
      </div>`;
  }

  const popularPizzas = ['Euro Special Pizza','Chicken Tikka','Fajita Pizza','Chicken Lover','Chicken Supreme'];

  function productCardPizza(name, sizePrices, slug, catLabel){
    const sizeKeys = Object.keys(sizePrices);
    const defaultSize = sizeKeys[0];
    const priceAttrs = sizeKeys.map(s=>`data-price-${s}="${sizePrices[s]}"`).join(' ');
    const pillsHtml = sizeKeys.map(s=>`<button class="size-pill ${s===defaultSize?'active':''}" data-size="${s}"><span>${s}</span><span class="size-price">${formatPrice(sizePrices[s])}</span></button>`).join('');
    const key = `${name} (${sizeLabels[defaultSize]})`;
    const imgSlug = slugify(name);
    return `
      <div class="product-card is-pizza" data-pizza="${name}" data-selected-size="${defaultSize}" ${priceAttrs}>
        <div class="product-photo">
          <div class="photo-wrap">
            <img src="images/item-${imgSlug}.jpg" alt="${name}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="photo-slot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
              <span>Add photo</span>
            </div>
            <span class="chip">${catLabel}</span>
            <span class="price-tag">${formatPrice(sizePrices[defaultSize])}</span>
          </div>
        </div>
        <div class="product-body">
          <div class="product-name">${name}</div>
          <div class="size-pills">${pillsHtml}</div>
          <div class="price-row"><span class="from-tag">${sizeKeys.length > 1 ? 'From' : ''}</span><span class="pr">${formatPrice(sizePrices[defaultSize])}</span></div>
          <div class="add-slot-wrap">${addSlotHtml(key, sizePrices[defaultSize], key)}</div>
        </div>
      </div>`;
  }

  function renderMenuContent(){
    menuContent.innerHTML = menuCategories.map((g,idx)=>{
      let cardsHtml;
      if(g.isPizza){
        cardsHtml = g.items.map(name=>{
          const sp = (g.group.extra||[]).find(e=>e.name===name);
          const sizePrices = sp ? sp.sizePrices : g.group.sizePrices;
          return productCardPizza(name, sizePrices, g.slug, g.cat);
        }).join('');
      } else {
        cardsHtml = g.items.map(it=>productCardSimple(it, g.slug, g.cat)).join('');
      }
      return `
        <div class="menu-block ${g.slug===activeSlug?'active':''}" id="cat-${g.slug}" data-slug="${g.slug}">
          <div class="menu-block-head">
            <h3>${g.cat}</h3>
            <span class="count-tag">${g.items.length} items</span>
          </div>
          <div class="menu-slider">
            <div class="product-grid">${cardsHtml}</div>
          </div>
        </div>`;
    }).join('');
    wireProductButtons();
    initSliders();
  }

  function renderTabs(){
    catTabs.innerHTML = menuCategories.map(g=>
      `<button class="cat-tab ${g.slug===activeSlug?'active':''}" data-slug="${g.slug}">${g.cat}</button>`
    ).join('');
    catTabs.querySelectorAll('.cat-tab').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        activeSlug = btn.dataset.slug;
        renderTabs();
        document.querySelectorAll('.menu-block').forEach(b=> b.classList.toggle('active', b.dataset.slug === activeSlug));
        const activeTabBtn = catTabs.querySelector('.cat-tab.active');
        if(activeTabBtn) activeTabBtn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
        const tabsWrap = document.querySelector('.cat-tabs-wrap');
        if(tabsWrap) window.scrollTo({top: tabsWrap.offsetTop - 80, behavior:'smooth'});
        setTimeout(syncCatArrows,350);
      });
    });
    syncCatArrows();
  }

  renderMenuContent();

  /* ===== CATEGORY TAB SCROLL ARROWS ===== */
  const catArrL = document.getElementById('catArrL');
  const catArrR = document.getElementById('catArrR');
  const catFadeL = document.getElementById('catFadeL');
  const catFadeR = document.getElementById('catFadeR');
  function syncCatArrows(){
    if(!catTabs||!catArrL||!catArrR) return;
    const s=catTabs.scrollLeft, m=catTabs.scrollWidth-catTabs.clientWidth;
    const atStart = s <= 8;
    const atEnd = s >= m - 8;
    catArrL.style.display = atStart ? 'none' : 'flex';
    catArrR.style.display = atEnd ? 'none' : 'flex';
    if(catFadeL) catFadeL.classList.toggle('show', !atStart);
    if(catFadeR) catFadeR.style.opacity = atEnd ? '0' : '1';
  }
  if(catArrL&&catArrR&&catTabs){
    catArrL.addEventListener('click',()=>catTabs.scrollBy({left:-260,behavior:'smooth'}));
    catArrR.addEventListener('click',()=>catTabs.scrollBy({left:260,behavior:'smooth'}));
    catTabs.addEventListener('scroll',syncCatArrows,{passive:true});
    new ResizeObserver(syncCatArrows).observe(catTabs);
  }

  renderTabs();

  /* ===== MENU SLIDER ARROWS ===== */
  function initSliders(){
    document.querySelectorAll('.menu-slider').forEach(slider=>{
      const grid = slider.querySelector('.product-grid');
      const leftArrow = slider.querySelector('.slider-arrow.left');
      const rightArrow = slider.querySelector('.slider-arrow.right');
      const fadeLeft = slider.querySelector('.slider-fade-left');
      const fadeRight = slider.querySelector('.slider-fade-right');
      if(!grid || !leftArrow || !rightArrow) return;

      const SCROLL_STEP = 300;

      function updateArrows(){
        const sl = grid.scrollLeft;
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        leftArrow.classList.toggle('visible', sl > 10);
        rightArrow.classList.toggle('visible', sl < maxScroll - 10);
        if(fadeLeft) fadeLeft.style.opacity = sl > 10 ? '1' : '0';
        if(fadeRight) fadeRight.style.opacity = sl < maxScroll - 10 ? '1' : '0';
      }

      leftArrow.addEventListener('click', ()=> grid.scrollBy({left:-SCROLL_STEP, behavior:'smooth'}));
      rightArrow.addEventListener('click', ()=> grid.scrollBy({left:SCROLL_STEP, behavior:'smooth'}));

      grid.addEventListener('scroll', updateArrows, {passive:true});

      const ro = new ResizeObserver(()=> updateArrows());
      ro.observe(grid);

      updateArrows();
    });
  }

  if(document.getElementById('menuSearch')){
  /* ===== ADVANCED SEARCH ===== */
  }


  const searchInput = document.getElementById('menuSearch');
  const searchClear = document.getElementById('searchClear');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchWrap = document.getElementById('searchWrap');
  let sdIndex = -1;

  /* Build a flat searchable list from all menu data */
  function buildSearchIndex(){
    const idx = [];
    menuCategories.forEach(g=>{
      g.items.forEach(item=>{
        let name, price, desc;
        if(g.isPizza){
          const sp = (g.group.extra||[]).find(e=>e.name===item);
          const sz = sp ? sp.sizePrices : g.group.sizePrices;
          const mKey = Object.keys(sz).includes('M') ? 'M' : Object.keys(sz)[0];
          name = item; price = sz[mKey]; desc = '';
        } else {
          name = item.name; price = item.price; desc = item.desc || '';
        }
        idx.push({ name, price, desc, cat:g.cat, slug:g.slug, code:g.code, isPizza:g.isPizza });
      });
    });
    return idx;
  }
  const searchIndex = buildSearchIndex();

  /* Search icon per category code */
  function sdIcon(code){
    return ICONS[code] || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/></svg>';
  }

  /* Highlight matching text */
  function hl(text, q){
    if(!q) return text;
    const re = new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
    return text.replace(re,'<mark>$1</mark>');
  }

  /* Smart search: score results by relevance */
  function searchMenu(q){
    if(!q) return [];
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    const results = [];
    searchIndex.forEach(item=>{
      const nameL = item.name.toLowerCase();
      const descL = item.desc.toLowerCase();
      const catL = item.cat.toLowerCase();
      let score = 0;
      /* Exact match = highest */
      if(nameL === q) score += 100;
      /* Starts with query */
      if(nameL.startsWith(q)) score += 60;
      /* All words found in name */
      const allInName = words.every(w=> nameL.includes(w));
      if(allInName) score += 40;
      /* Any word found in name */
      words.forEach(w=>{ if(nameL.includes(w)) score += 15; });
      /* Match in description */
      words.forEach(w=>{ if(descL.includes(w)) score += 5; });
      /* Match in category */
      words.forEach(w=>{ if(catL.includes(w)) score += 3; });
      if(score > 0) results.push({...item, score});
    });
    results.sort((a,b)=> b.score - a.score);
    return results.slice(0, 8);
  }

  /* Render dropdown */
  function renderDropdown(results, q){
    if(!results.length){
      searchDropdown.innerHTML = `<div class="no-results">No items found for "<strong>${q}</strong>"</div>`;
      searchDropdown.classList.add('open');
      return;
    }
    let html = '';
    results.forEach((r,i)=>{
      html += `
        <div class="sd-item" data-sdslug="${r.slug}" data-sdname="${r.name}" data-sdidx="${i}">
          <div class="sd-item-icon">${sdIcon(r.code)}</div>
          <div class="sd-item-info">
            <div class="sd-item-name">${hl(r.name, q)}</div>
            <div class="sd-item-cat">${r.cat}</div>
          </div>
          <div class="sd-item-price">${formatPrice(r.price)}</div>
        </div>`;
    });
    searchDropdown.innerHTML = html;
    searchDropdown.classList.add('open');
    sdIndex = -1;

    /* Click suggestion → jump to category + highlight card */
    searchDropdown.querySelectorAll('.sd-item').forEach(el=>{
      el.addEventListener('click', ()=>{
        const slug = el.dataset.sdslug;
        const name = el.dataset.sdname;
        jumpToItem(slug, name);
      });
    });
  }

  /* Jump to a specific item */
  function jumpToItem(slug, name){
    activeSlug = slug;
    renderTabs();
    document.querySelectorAll('.menu-block').forEach(b=> b.classList.toggle('active', b.dataset.slug === slug));
    searchInput.value = '';
    searchClear.style.display = 'none';
    searchDropdown.classList.remove('open');
    /* Scroll to menu section */
    const menuSection = document.getElementById('menu');
    if(menuSection) window.scrollTo({top: menuSection.offsetTop - 80, behavior:'smooth'});
    /* After scroll, highlight the card */
    setTimeout(()=>{
      document.querySelectorAll('.product-card').forEach(c=>{
        c.style.removeProperty('outline');
        c.style.removeProperty('box-shadow');
        const cName = c.dataset.pizza || c.dataset.item || '';
        if(cName === name){
          c.style.outline = '2px solid var(--primary)';
          c.style.boxShadow = '0 0 0 4px rgba(224,123,26,0.15)';
          c.scrollIntoView({behavior:'smooth', block:'center'});
          setTimeout(()=>{ c.style.removeProperty('outline'); c.style.removeProperty('box-shadow'); }, 2000);
        }
      });
    }, 400);
  }

  /* Live search input */
  searchInput.addEventListener('input', ()=>{
    const q = searchInput.value.trim();
    searchClear.style.display = q ? 'flex' : 'none';
    if(!q){
      searchDropdown.classList.remove('open');
      resetMenuView();
      return;
    }
    const results = searchMenu(q.toLowerCase());
    renderDropdown(results, q.toLowerCase());
    applySearchFilter(q.toLowerCase());
  });

  /* Keyboard nav in dropdown */
  searchInput.addEventListener('keydown', (e)=>{
    const items = searchDropdown.querySelectorAll('.sd-item');
    if(!items.length) return;
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      sdIndex = Math.min(sdIndex + 1, items.length - 1);
      items.forEach((el,i)=> el.classList.toggle('active', i === sdIndex));
    } else if(e.key === 'ArrowUp'){
      e.preventDefault();
      sdIndex = Math.max(sdIndex - 1, 0);
      items.forEach((el,i)=> el.classList.toggle('active', i === sdIndex));
    } else if(e.key === 'Enter' && sdIndex >= 0){
      e.preventDefault();
      items[sdIndex].click();
    } else if(e.key === 'Escape'){
      searchDropdown.classList.remove('open');
      searchInput.blur();
    }
  });

  /* Close dropdown on outside click */
  document.addEventListener('click', (e)=>{
    if(!searchWrap.contains(e.target)) searchDropdown.classList.remove('open');
  });
  searchInput.addEventListener('focus', ()=>{
    const q = searchInput.value.trim();
    if(q && searchDropdown.innerHTML) searchDropdown.classList.add('open');
  });

  /* Clear button */
  searchClear.addEventListener('click', ()=>{
    searchInput.value = '';
    searchClear.style.display = 'none';
    searchDropdown.classList.remove('open');
    resetMenuView();
    searchInput.focus();
  });

  /* Filter menu cards by search text */
  function applySearchFilter(q){
    let anyVisible = false;
    document.querySelectorAll('.menu-block').forEach(block=>{
      let blockHasMatch = false;
      block.querySelectorAll('.product-card').forEach(card=>{
        const label = (card.dataset.item || card.dataset.pizza || '').toLowerCase();
        const desc = (card.querySelector('.product-desc')?.textContent || '').toLowerCase();
        const match = label.includes(q) || desc.includes(q);
        card.style.display = match ? '' : 'none';
        if(match) blockHasMatch = true;
      });
      block.classList.toggle('active', blockHasMatch);
      if(blockHasMatch) anyVisible = true;
    });
    document.querySelectorAll('.menu-slider').forEach(slider=>{
      const grid = slider.querySelector('.product-grid');
      if(grid) grid.dispatchEvent(new Event('scroll'));
    });
  }

  /* Reset menu to normal view */
  function resetMenuView(){
    document.querySelectorAll('.menu-block').forEach(block=>{
      block.classList.toggle('active', block.dataset.slug === activeSlug);
      block.querySelectorAll('.product-card').forEach(c=> c.style.display = '');
    });
    document.querySelectorAll('.menu-slider').forEach(slider=>{
      const grid = slider.querySelector('.product-grid');
      if(grid) grid.dispatchEvent(new Event('scroll'));
    });
  }

  if(document.getElementById('dealsGrid')){
  /* ===== DEALS ===== */
  }


  document.getElementById('dealsGrid').innerHTML = deals.map(d=>`
    <div class="deal-card reveal" data-item="${d.name}" data-price="${d.price}">
      <div class="deal-photo">
        <div class="photo-wrap">
          <img src="${d.img}" alt="${d.name}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="photo-slot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            <span>Add photo</span>
          </div>
        </div>
      </div>
      <div class="deal-top"><span class="deal-tag">${d.tag}</span><span class="pr">${formatPrice(d.price)}</span></div>
      <div class="deal-name">${d.name}</div>
      <p class="deal-desc">${d.desc}</p>
      <div class="deal-bottom"><div class="add-slot-wrap">${addSlotHtml(d.name, d.price, d.name)}</div></div>
    </div>
  `).join('');
  document.querySelectorAll('#dealsGrid [data-additem]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{ e.stopPropagation(); addItem(btn.dataset.additem, parseFloat(btn.dataset.price), btn.dataset.label); });
  });
  document.querySelectorAll('#dealsGrid .stepper').forEach(wireMenuStepper);

  /* ===== DEALS ARROWS ===== */
  (function(){
    const grid = document.getElementById('dealsGrid');
    const arrL = document.getElementById('dealsArrL');
    const arrR = document.getElementById('dealsArrR');
    if(!grid || !arrL || !arrR) return;
    const scrollAmt = 260;
    function syncDealsArrows(){
      const sl = grid.scrollLeft;
      const mx = grid.scrollWidth - grid.clientWidth;
      arrL.classList.toggle('show', sl > 10);
      arrR.classList.toggle('show', sl < mx - 10);
    }
    arrL.addEventListener('click', ()=> grid.scrollBy({left:-scrollAmt, behavior:'smooth'}));
    arrR.addEventListener('click', ()=> grid.scrollBy({left:scrollAmt, behavior:'smooth'}));
    grid.addEventListener('scroll', syncDealsArrows, {passive:true});
    syncDealsArrows();
    new ResizeObserver(syncDealsArrows).observe(grid);
  })();

  /* ===== SCROLL REVEAL ===== */
  }


  if(typeof IntersectionObserver !== 'undefined'){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(t=>io.observe(t));
  } else {
    document.querySelectorAll('.reveal').forEach(t=>t.classList.add('visible'));
  }

  /* ===== MOBILE DRAWER ===== */
  const mobileDrawer = document.getElementById('mobileDrawer');
  document.getElementById('menuToggleBtn').addEventListener('click', ()=> mobileDrawer.classList.toggle('open'));
  mobileDrawer.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mobileDrawer.classList.remove('open')));

  /* ===== BACK TO TOP + GLASS NAV ===== */
  const backTop = document.getElementById('backTop');
  const siteNav = document.querySelector('header.site-nav');
  window.addEventListener('scroll', ()=>{
    backTop.classList.toggle('show', window.scrollY > 600);
    if(siteNav) siteNav.classList.toggle('scrolled', window.scrollY > 20);
  }, {passive:true});
  backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  /* ===== LOGO / HOME =====
     at home -> reload ; not at home -> go home (top) */
  document.querySelectorAll('.logo, a[href="#home"]').forEach(l=> l.addEventListener('click', (e)=>{
    e.preventDefault();
    mobileDrawer.classList.remove('open');
    const base = window.location.pathname + window.location.search;
    if(window.scrollY > 4){
      if(window.location.hash) history.replaceState(null, '', base);
      window.scrollTo({top:0, behavior:'smooth'});
    } else {
      if(window.location.hash) history.replaceState(null, '', base);
      window.location.reload();
    }
  }));

  /* ===== TOAST / COPY ===== */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg){ toast.textContent = msg; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(()=> toast.classList.remove('show'), 2000); }
  function copyText(text, label){
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(()=> showToast(label + ' copied!')); }
    else { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try{ document.execCommand('copy'); showToast(label + ' copied!'); }catch(e){} document.body.removeChild(ta); }
  }
  document.getElementById('copyAddr').addEventListener('click', ()=> copyText(document.getElementById('addrText').textContent.trim(), 'Address'));
  document.getElementById('copyPhone').addEventListener('click', ()=> copyText(document.getElementById('phoneText').textContent.trim(), 'Phone number'));

  /* ===== THEME ===== */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const MOON = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  const SUN = '<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>';
  function applyTheme(mode){
    if(mode==='dark'){ document.documentElement.setAttribute('data-theme','dark'); themeIcon.innerHTML = SUN; }
    else { document.documentElement.removeAttribute('data-theme'); themeIcon.innerHTML = MOON; }
  }
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('euro-theme') || 'light'; } catch(e){}
  applyTheme(savedTheme);
  themeToggle.addEventListener('click', ()=>{
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('euro-theme', next); } catch(e){}
  });



