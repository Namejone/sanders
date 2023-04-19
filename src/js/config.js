
	// CONFIGURATOR START

// ALL FUNCTIONS START======> 
  
  /* SLIDE UP */
  function slideUp(target, wrapper, duration = 500) {
    target.style.transitionProperty = 'height';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    window.setTimeout( () => {
          wrapper.classList.remove('active')
          target.style.display = 'none';
          target.style.removeProperty('height');
          target.style.removeProperty('overflow');
          target.style.removeProperty('transition-duration');
          target.style.removeProperty('transition-property');
          
    }, duration);
  }
  /* SLIDE DOWN */
  function slideDown(target, wrapper, duration = 500) {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.clientHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    window.setTimeout( () => {
      wrapper.classList.add('active')
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }

  // variant preview add and accordion checked
  function variantChecked(accordionHeader, variantPreviewItem, wrapIndex) {
    variantPreviewItem[wrapIndex].classList.add('active');
    accordionHeader[wrapIndex].classList.add('checked');
  }

  // SET PULSE TO ITEM
  function setPulse(target, duration) {  
    setTimeout(() => {
      target.classList.add('pulse');
      setTimeout(() => {
        target.classList.remove('pulse');
      }, 500);
    }, duration);
  }

  // no Click Set Pulse Func
  let noClickSetPulse
  function noClickSetPulseFunc(items) {
    clearInterval(noClickSetPulse)
    noClickSetPulse = setInterval(() => {
      let counter = 0;
      items.forEach(btn => {
        if (!btn.classList.contains('active')) {
          counter++;            
        }
      });

      if (counter ==  items.length) {
        items.forEach(btn => {
          setPulse(btn, 0);
        });
      }else{
        clearInterval(noClickSetPulse)
      }
    }, 5000);
  }

  //smooth scroll
  function smoothScroll(targetPosition, duration){
    var startPosition = window.pageYOffset;
    var distance = targetPosition// - startPosition;
    var startTime = null;
    
    function animation(currentTime){
      if(startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if(timeElapsed < duration) {
        requestAnimationFrame(animation)      
      }
    }
    
    // http://www.gizma.com/easing/
    function ease(t,b,c,d){
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b
    }
    
    requestAnimationFrame(animation);
  }

// get preview after click overing the items


  let enable = true
  let timer;
  function overPreviewPack(triggers, tabs) {
    triggers.forEach((trigger, index) => {
      trigger.addEventListener('mouseenter', ()=>{
        if (enable) {
          tabChange(triggers, tabs, triggers[index], index)
          applyLergestheight(tabs)
        }
      })

      trigger.addEventListener('mouseleave', ()=>{
        if (enable) {
          tabRemove(triggers, tabs)
          timer = setTimeout(() => {
            tabs[0].parentNode.style.height = 'auto';
          }, 200);
        }
      })  


      function applyLergestheight(items) {
        clearTimeout(timer)
        const itemheight = []
        let hightest;
        let parent = items[0].parentNode;
        items.forEach(item => {
          item.style.borderBottom = '0.01px solid transparent'
          itemheight.push(item.getBoundingClientRect().height)
        });
        gap = parseInt(window.getComputedStyle(parent).paddingTop) + parseInt(window.getComputedStyle(parent).paddingBottom) + parseInt(window.getComputedStyle(parent).marginTop) + parseInt(window.getComputedStyle(parent).marginBottom)
        hightest = Math.max.apply(null, itemheight) + gap

        parent.style.height = hightest + 'px';
      }


    });
  }  

// APPLY SAME HIGHT TO ALL ITEMS
	function applyLergestheight(items) {
		const itemheight = []
		items.forEach(item => {
			item.style.height = 'auto'
			itemheight.push(item.getBoundingClientRect().height)
		});
		items.forEach(item => {
			item.style.height = Math.max.apply(null, itemheight) + 'px'
		});
	}
  
// BOX title color changes
  function changeHeader(selector) {
    selector.classList.remove('bg-primary')
    selector.classList.add('bg-gray-medium')
    selector.querySelector("h4").classList.remove('text-white')
  }
  
// Button show or disable
  function btnAction(btn, active) {
    if(active){
      btn.classList.remove('btn-disable')
      btn.classList.add('btn-primary')
    }else{
      btn.classList.add('btn-disable')
      btn.classList.remove('btn-primary')
    }
  }
  
// TAB click action
	function tabFunc(tabLinks, tabs) { 
      tabLinks.forEach((link, index) => {
        link.addEventListener('click', (e)=>{
          e.preventDefault();
          tabChange (tabLinks, tabs, link, index)
        })
		  });
	}

// TAB CHANGE
  function tabChange(tabLinks, tabs, link, index) {
    tabRemove(tabLinks, tabs)
    link.classList.add('active')
    tabs[index].classList.add('active')
  }

// TAB REMOVE
  function tabRemove(tabLinks, tabs) {
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active')
      tabs[i].classList.remove('active')
    }
  }

// ALL FUNCTIONS END======> 

  // pack container
  let cardPackagestrigger = document.querySelectorAll('.config-package .card-package');
  let cardPackagesTabs = document.querySelectorAll('.packageInfo-container-tab');  

  const packageContainer = document.querySelectorAll('.packageInfo-container-tab');
  packageContainer.forEach(container => {
    //pack wrapper
    const packageWrapTigger = container.querySelectorAll('.package-wrap-tigger'); 
    const packageWrapper = container.querySelectorAll('.packageInfo-wrap-tab');  
    tabFunc(packageWrapTigger, packageWrapper) 

    packageWrapper.forEach(wrapper => {
        //pack choose trigger (pack product items)
        let packChooseTigger = wrapper.querySelectorAll('.pack-choose-trigger');        
        let packChooseTabs = wrapper.querySelectorAll('.choose-tab');        
        let calcBtn = wrapper.querySelectorAll('.pack-calc-btn')
        let packExpandTabs = wrapper.querySelectorAll('.pack-expand-tab')
        let specItemsTab = wrapper.querySelectorAll('.spec-items-tab')

        let packGelBtnsWrap = wrapper.querySelector('.Pack-gel-btns');
        let packGelBnts = packGelBtnsWrap.querySelectorAll('button')

        //slide the card title
        let allCardHeader = wrapper.querySelectorAll('.card-header')

        allCardHeader.forEach((header, index) => {
            header.addEventListener('click', ()=>{
              
              let y = header.parentElement.getBoundingClientRect().top - 50;
              smoothScroll(y, 1000);
            })

            let titleWrap = header.parentElement
            header.classList.add('absolute')
            let titleHeight = header.clientHeight
            header.style.width = titleWrap.clientWidth + "px"
            header.style.cursor = "pointer"
            header.style.zIndex = allCardHeader.length - index
    
            let holder = document.createElement('SPAN')
            holder.classList.add('title-holder')
            holder.style.height = titleHeight + 'px'
            titleWrap.insertBefore(holder, header.nextElementSibling)
        
            let shiftY = wrapper.getBoundingClientRect().top - titleWrap.getBoundingClientRect().top

            let wrapperTop = wrapper.getBoundingClientRect().top - window.innerHeight + titleHeight
            let titleTop = titleWrap.getBoundingClientRect().top - window.innerHeight + titleHeight
            
            header.style.width = titleWrap.clientWidth + "px"
            titleHeight = header.clientHeight
            holder.style.height = titleHeight + 'px'

            function updateCardTitle() {
              titleHeight = header.clientHeight
              header.style.width = titleWrap.clientWidth + "px"

              titleHeight = header.clientHeight
              holder.style.height = titleHeight + 'px'


              wrapperTop = wrapper.getBoundingClientRect().top - window.innerHeight + titleHeight
              titleTop = titleWrap.getBoundingClientRect().top - window.innerHeight + titleHeight
              if (wrapperTop <= 0) {
                header.style.transform = `translateY(0px)`
        
                if (titleTop <= 0) {
                  header.classList.remove('fixed')
                  header.classList.add('absolute')
                }else{              
                  header.classList.add('fixed')
                  header.classList.remove('absolute')
                }
              }else{
                header.classList.remove('fixed')
                header.classList.add('absolute')
                header.style.transform = `translateY(${shiftY}px)`
              }
            }

            window.addEventListener('load', ()=>{
              updateCardTitle()
            })
            window.addEventListener('resize', ()=>{
              updateCardTitle()
            })
            window.addEventListener('scroll', ()=>{
              updateCardTitle()
            })

        });
             
        tabFunc(packChooseTigger, specItemsTab)
        tabFunc(packChooseTigger, calcBtn)
        tabFunc(packChooseTigger, packChooseTabs)     
        tabFunc(packChooseTigger, packExpandTabs)     
        
        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {  
          overPreviewPack(packChooseTigger, packChooseTabs)
          overPreviewPack(packChooseTigger, packExpandTabs)
        }

        packChooseTabs.forEach((chooseTab, index) => {
          // marge all color fill trigger wrapper
          let capPreviewWrap = chooseTab.querySelector('.colorFill-wrapper')
          let expandcapPreviewWrap = packExpandTabs[index].querySelectorAll('.colorFill-wrapper')
          let specItemsColor = specItemsTab[index].querySelectorAll('.spec-fill-color')
          let specItemsColorTab = specItemsTab[index].querySelectorAll('.spec-fill-color-tab')
          let specItemsTitle = specItemsTab[index].querySelectorAll('.spec-fill-title')

          let allCapPreviewWrap = []
          if (capPreviewWrap) {
            allCapPreviewWrap.push(capPreviewWrap)
          }
          expandcapPreviewWrap.forEach(wrap => {
            allCapPreviewWrap.push(wrap)
          });

          // marge all color change wrapper
          let capChangeWrap = chooseTab.querySelector('.colorFill-change-wrap')
          let expandChangeWrap = packExpandTabs[index].querySelectorAll('.colorFill-change-wrap')
          let specChangeWrap = specItemsTab[index].querySelector('.colorFill-change-wrap')
     
          // change spec info with clicking print bnt
          let printBtns = packExpandTabs[index].querySelectorAll('.pack-print-btn')
          let specPrintSelect =  specItemsTab[index].querySelectorAll('.spec-print-select')   
          


          let allChangeWrap = []
          if (capChangeWrap) {
            allChangeWrap.push(capChangeWrap)
          }
          if (specChangeWrap) {
            allChangeWrap.push(specChangeWrap)
          }
          expandChangeWrap.forEach(wrap => {
            allChangeWrap.push(wrap)
          });
                             
          let previewCheckedWrap = []


          allCapPreviewWrap.forEach((wrap, wrapIndex) => {
            if (wrap.classList.contains('colorFill-wrapper-checked')) {
              previewCheckedWrap.push(wrap)
            }

            let capTrigger =  wrap.querySelectorAll('.card-capColor');
            capTrigger.forEach(trigger => {
              trigger.addEventListener('click', ()=>{

                let y = wrap.getBoundingClientRect().top - 50;
                smoothScroll(y, 1000);

                let nextPreviewWrap = allCapPreviewWrap[wrapIndex + 1]
                
                if (wrap.contains(packGelBtnsWrap)) {  
                  let packContentWrap = packExpandTabs[index].querySelector('.packageInfo-content-wrap')
                  let packContentTab = packContentWrap.querySelectorAll('.pack-content-tab')

                  let expandWrap = wrap.closest('.pack-expand')   
                  // changeHeader(expandWrap.querySelector('.card-header'))   
                  packGelBtnsWrap.classList.add('active');
                  noClickSetPulseFunc(packGelBnts)
                  packGelBnts.forEach(btn => {
                    setPulse(btn, 1200);
                  });
                  
                  for (let i = 0; i < allChangeWrap.length; i++) {
                    let configImgWrap = allChangeWrap[i].querySelectorAll('.colorFill-change-tab')
                    tabFunc(packGelBnts, configImgWrap)                   
                  }
                  
                  tabFunc(packGelBnts, specItemsColorTab)
                  tabFunc(packGelBnts, packContentTab)
                  
                  packGelBnts.forEach((btn, btnIndex) => {                     

                    btn.addEventListener('click', ()=>{
                      specItemsTitle[0].classList.add('active');
                      let packageInfoContentWrap = wrap.closest('.pack-expand').querySelector('.packageInfo-content-wrap');
                      let y = packageInfoContentWrap.getBoundingClientRect().top + 50;
                      smoothScroll(y, 1000);     
                      
                      let capTrigger = packContentTab[btnIndex].querySelectorAll('.card-capColor');
                      let counter = 0;

                      noClickSetPulseFunc(capTrigger)
                      capTrigger.forEach(trigger => {
                        setPulse(trigger, 1200);                        
                        if (!trigger.classList.contains('active')) {
                          counter++
                        }
                      });
                      
                      if (counter == capTrigger.length) {
                        btnAction(calcBtn[index].querySelector('button'), false)
                      }                      

                    })
                  });
                  
                }
                else if(wrap.closest('.packageInfo-content-wrap')){

                  let packContentWrap = packExpandTabs[index].querySelector('.packageInfo-content-wrap')
                  let packContentTab = packContentWrap.querySelectorAll('.pack-content-tab')
                  let packContentWrapTab = wrap.closest('.pack-content-tab')
                  packContentTab.forEach((tab, tabIndex) => {
                    if (tab == packContentWrapTab) {
                      nextPreviewWrap = allCapPreviewWrap[wrapIndex + packContentTab.length - tabIndex]
                      if (nextPreviewWrap) {
                        let expandWrap = nextPreviewWrap.closest('.pack-expand') 
                        expandWrap.classList.add('active')
                      }else{
                        expandThePrint()
                      }
                    }
                  }); 
                }else if (nextPreviewWrap) {
                    let capTrigger = nextPreviewWrap.querySelectorAll('.card-capColor');
                    noClickSetPulseFunc(capTrigger)
                    capTrigger.forEach(btn => {
                      setPulse(btn, 1200);
                    });

                    let expandWrap = nextPreviewWrap.closest('.pack-expand')   
                    expandWrap.classList.add('active')

                }else{
                  expandThePrint()
                }
              })
            });

            for (let i = 0; i < allChangeWrap.length; i++) {
              let configImgWrap = allChangeWrap[i].querySelectorAll('.colorFill-change')[wrapIndex]
              let configImg = configImgWrap.querySelectorAll('img')
              tabFunc(capTrigger, configImg)                   
            }

            function expandThePrint() {
              let printExpandWrap =  packExpandTabs[index].querySelectorAll('.pack-expand') 
              printExpandWrap.forEach((printWrap, printIndex) => {
                if (printIndex == printExpandWrap.length - 1) {                        
                  printWrap.classList.add('active')
                  noClickSetPulseFunc(printBtns)
                  printBtns.forEach(trigger => {
                    setPulse(trigger, 1200)
                  });
                }
              });  
            }
          });
          
          previewCheckedWrap.forEach((wrap, wrapIndex) => {            
            let triggers = wrap.querySelectorAll('.card-capColor')
            let colors = specItemsColor[wrapIndex].querySelectorAll('.colorInd-item')
            triggers.forEach(trigger => {
              trigger.addEventListener('click', ()=>{                
                specItemsColor[wrapIndex].classList.add('active')
              })
            });
            tabFunc(triggers, colors)
          });

          

          packChooseTigger[index].addEventListener('click', ()=>{
            //specification fill color add 
            let y = packChooseTigger[index].getBoundingClientRect().top - 50;
            smoothScroll(y, 1000);
            

            if (packChooseTigger[index].classList.contains('clicked')) {  
              packChooseTigger[index].classList.remove('clicked')
              packChooseTigger[index].classList.remove('active')
              enable = true
              
              tabRemove(packChooseTigger[index], expandcapPreviewWrap)

              specItemsTab[index].classList.remove('active')
              calcBtn[index].classList.remove('active')
              packChooseTabs[index].classList.remove('active')
              packExpandTabs[index].classList.remove('active')

            }else{              
              packChooseTigger.forEach(trigger => {
                trigger.classList.remove('clicked')
              });
              packChooseTigger[index].classList.add('clicked')
              enable = false
              timer = setTimeout(() => {
                packExpandTabs[index].parentNode.style.height = 'auto';
                packChooseTabs[index].parentNode.style.height = 'auto';
              }, 200);
            }


            if (allCapPreviewWrap.length) {
              let capTrigger = allCapPreviewWrap[0].querySelectorAll('.card-capColor');
              noClickSetPulseFunc(capTrigger)
              capTrigger.forEach(btn => {
                setPulse(btn, 1200);
              });
            }else{
              noClickSetPulseFunc(printBtns)
              printBtns.forEach(trigger => {
                setPulse(trigger, 1200)
              });
            }


          })

          
          // change spec info with clicking print bnt    
          tabFunc(printBtns, specPrintSelect)
          printBtns.forEach(btn => {
            btn.addEventListener('click', ()=>{
              specPrintSelect[0].parentElement.classList.add('active')
              console.log(calcBtn[index]);
              btnAction(calcBtn[index].querySelector('button'), true)  
              specItemsTitle[specItemsTitle.length - 1].classList.add('active');
            })
          });
        
        // changing cap color
        


        });
        
        
    });  

    packageWrapTigger.forEach((trigger,) => {
      trigger.addEventListener('click', ()=>{ 
        
        let w = container.querySelector('.variant-btns')          
        let y = w.getBoundingClientRect().top - 30;
        smoothScroll(y, 800);

      })
    });    
  });  
  tabFunc(cardPackagestrigger, cardPackagesTabs) 


  cardPackagestrigger.forEach((trigger, index) => {
    trigger.addEventListener('click', ()=>{
      let container = cardPackagesTabs[index];      
      let y = container.getBoundingClientRect().top - 20;
      smoothScroll(y, 1000);     
      const packageWrapTigger = container.querySelectorAll('.package-wrap-tigger'); 
   
      noClickSetPulseFunc(packageWrapTigger)
      packageWrapTigger.forEach(trigger => {
        setPulse(trigger, 1200)
      });

    })
  });




// ACCORDION PACKAGE |  QUICK CONFIGURATOR
  const accoPackContainer = document.querySelectorAll('.acco-pack-container');
  accoPackContainer.forEach(container => {   

    let accoWrapper = container.querySelectorAll('.acco-pack-wrapper');
    let variantPreviewItem = container.querySelectorAll('.acco-variant-preview-item');
    let accordionHeader = container.querySelectorAll('.acco-pack-header');    


    accoWrapper.forEach((wrapper, wrapIndex) => {  

      let cardMini = wrapper.querySelectorAll('.acco-choose-card-wrap');
      let bodyInner = wrapper.querySelector('.acco-pack-body-inner');
      let choosevariantBtn = wrapper.querySelectorAll('.acco-choose-variant button');
      let variantPreview = variantPreviewItem[wrapIndex].querySelectorAll('.acco-variant-preview')

      let bodyInnerHeight = (cardMini[0].offsetHeight + parseInt(window.getComputedStyle(cardMini[0]).marginBottom) ) * 3
      bodyInner.style.maxHeight = bodyInnerHeight + "px"

      // ACCORDION JS START

      let title = wrapper.querySelector('.acco-pack-header')
      let body = wrapper.querySelector('.acco-pack-body')

      if (wrapper.classList.contains('active')) {
        slideDown(body, wrapper)
      }else{
        slideUp(body, wrapper)
      }
      title.addEventListener('click', ()=>{
        if (wrapper.classList.contains('active')) {
          slideUp(body, wrapper)
        }else{
          for (let i = 0; i < accoWrapper.length; i++) {
            if (accoWrapper[i] == wrapper) {
              slideDown(body, accoWrapper[i])
            }else{
              let body = accoWrapper[i].querySelector('.acco-pack-body')
              slideUp(body, accoWrapper[i])
            }
          }
        }
      })

      


      // ACCORDION JS END

      tabFunc(choosevariantBtn, variantPreview)

      cardMini.forEach(card => {
        let cardHeader = card.querySelector('.acco-choose-card')


        cardHeader.addEventListener('click', ()=>{
          hideCards(cardMini)
          if (card.classList.contains('active')) {
            defaultCards(cardMini)
          }else{
            activeCards(card)
          }  

          if (!card.querySelectorAll('.acco-choose-variant button').length) {   
            goNextAcco(card)
            tabFunc(cardMini, variantPreview)
          }
        })

        function activeCards(card) {
          card.classList.remove('hidden')
          card.classList.add('active')
          //set pulse to btns
          let btns = card.querySelectorAll("button")
          noClickSetPulseFunc(btns)
          btns.forEach(btn => {
            setPulse(btn, 500)
          });
        }
        
        function hideCards(cards) {          
          for (let i = 0; i < cards.length; i++) {
            if (cards[i] != card) {
              cards[i].classList.add('hidden')
              cards[i].classList.remove('active')
            }   
          }
        }      

      });
      
      choosevariantBtn.forEach(btn => {
        let card = btn.closest('.acco-choose-card-wrap')
        btn.addEventListener('click', ()=>{
          goNextAcco(card)
        })
      })


      function goNextAcco(card) {
        variantChecked(accordionHeader, variantPreviewItem, wrapIndex)
        for (let i = 0; i < cardMini.length; i++) {
          cardMini[i].classList.remove('checked')
        }
        card.classList.add('checked')  

        if (wrapIndex < accoWrapper.length - 1) {
          slideUp(body, wrapper)
          let nextBody = accoWrapper[wrapIndex + 1].querySelector('.acco-pack-body')
          slideDown(nextBody, wrapper.nextElementSibling)
        }else{
          slideUp(body, wrapper)
        }
    
        // go for calculation
        let ifCheckedAll = 0;
        accordionHeader.forEach(card => {
          if (card.classList.contains('checked')) {
            ifCheckedAll++;
          }
        });
        if (ifCheckedAll == accordionHeader.length) {
          variantPreviewItem[variantPreviewItem.length - 1].classList.add('active');
        }    
      }

      // final calculation button actions
      let qckConfigCalc = container.querySelectorAll('.qck-config-calc')
      qckConfigCalc.forEach(btn => {
        let qckConfigDetailWrap = document.querySelector('.qck-config-detail-wrap')
        btn.addEventListener('click', (e)=>{
          e.preventDefault();

          defaultCards(cardMini)

          qckConfigDetailWrap.classList.add('active') 
          let y = container.getBoundingClientRect().top;
          smoothScroll(y, 1000)

          variantPreviewItem[variantPreviewItem.length - 1].classList.remove('active');

          for (let i = 0; i < accoWrapper.length; i++) {
              let body = accoWrapper[i].querySelector('.acco-pack-body')
              slideUp(body, accoWrapper[i])
          }

        })
      });

      

      function defaultCards(cards) {
        for (let i = 0; i < cards.length; i++) {
          cards[i].classList.remove('hidden')
          cards[i].classList.remove('active')
        }
      }

    });


  });

  
// APPLY SAME HIGHT TO ALL ITEMS
	window.addEventListener('load',()=>{applyLergestheight(document.querySelectorAll('.card-package'))})
	window.addEventListener('resize',()=>{applyLergestheight(document.querySelectorAll('.card-package'))})
