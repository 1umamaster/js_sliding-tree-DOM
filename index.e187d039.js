!function e(t){var r=!0,l=!1,n=void 0;try{for(var i,a=t.querySelectorAll("li")[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var o=i.value;if(o.querySelector("ul")){e(o.querySelector("ul"));var y=document.createElement("span");y.textContent=o.firstChild.textContent.trim(),o.firstChild.remove(),o.insertBefore(y,o.querySelector("ul"))}}}catch(e){l=!0,n=e}finally{try{r||null==a.return||a.return()}finally{if(l)throw n}}}(document.querySelector(".tree")),document.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.nextElementSibling;t&&"UL"===t.tagName&&(""===t.style.display||"block"===t.style.display?t.style.display="none":t.style.display="block")}});
//# sourceMappingURL=index.e187d039.js.map