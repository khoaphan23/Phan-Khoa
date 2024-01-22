

const handleAddProduct = () => {
    const productName = cFrm.productName?.value;
    const productImg =  cFrm.productImage;
    const productPrice = cFrm.productPrice?.value;
    if(productName && productPrice && productImg?.files) {
        const url = URL.createObjectURL(productImg.files[0]);
        const list = document.getElementById('dienthoai');
        const liTag = document.createElement('li');
        liTag.innerHTML =  `
    <div class="p-2 border border-slate-500 rounded-lg space-y-1 h-full flex flex-col">
        <img src="${url}" alt="" class="mb-2 flex-1 object-center object-cover rounded-lg" />
        <strong class="block">${productName}</strong>
        <p>${productPrice}</p>
        <button class="text-white bg-green-600 rounded-lg" style="width: 20%;">Đặt mua</button>
    </div>
`;




        liTag.classList.add('col-span-1', 'h-full');
        list.appendChild(liTag);
        handleResetState();
    }

}