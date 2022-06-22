// load preloader
const preloader = document.querySelector(".preloader");
window.onload = function () {
  setTimeout(function () {
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 550);
  }, 550);
};

//stats number animation
const counters = document.querySelectorAll('.stats-number');
const speed = 1000;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('finalNumber');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        } 
   }
   animate();
});

// load all nfts
const nftContainer = document.querySelector(".collections")
const totalNftCount = 10;
for (let nftCount = 1; nftCount<totalNftCount+1; nftCount++){
    let nftImgContainer = `
      <div class="nft-container">
        <div class="nft-img-container">
            <img src="../assets/images/nfts/NFT(${nftCount.toString()}).webp" alt="NFT-${nftCount.toString()}}" loading="lazy" height="300">
        </div>
      </div>
    `
    nftContainer.innerHTML += nftImgContainer
}