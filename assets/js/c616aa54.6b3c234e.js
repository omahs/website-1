"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[725],{3905:function(e,t,o){o.d(t,{Zo:function(){return f},kt:function(){return c}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},f=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),h=s(o),c=a,u=h["".concat(p,".").concat(c)]||h[c]||m[c]||n;return o?r.createElement(u,i(i({ref:t},f),{},{components:o})):r.createElement(u,i({ref:t},f))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6654:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=o(3117),a=o(102),n=(o(7294),o(3905)),i=["components"],l={sidebar_position:3,title:"Proofs"},p="Semaphore proofs",s={unversionedId:"guides/proofs",id:"version-V2/guides/proofs",title:"Proofs",description:"Learn how to use Semaphore to generate and verify zero-knowledge proofs.",source:"@site/versioned_docs/version-V2/guides/proofs.md",sourceDirName:"guides",slug:"/guides/proofs",permalink:"/docs/guides/proofs",editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/guides/proofs.md",tags:[],version:"V2",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Proofs"},sidebar:"version-V2/mySidebar",previous:{title:"Groups",permalink:"/docs/guides/groups"},next:{title:"Private voting use case",permalink:"/docs/use-cases/private-voting"}},f=[{value:"Generate a proof off-chain",id:"generate-a-proof-off-chain",children:[],level:2},{value:"Verify a proof off-chain",id:"verify-a-proof-off-chain",children:[],level:2},{value:"Verify a proof on-chain",id:"verify-a-proof-on-chain",children:[{value:"Generate a Solidity-compatible proof",id:"generate-a-solidity-compatible-proof",children:[],level:3},{value:"Retrieve a nullifier hash",id:"retrieve-a-nullifier-hash",children:[],level:3}],level:2}],m={toc:f};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"semaphore-proofs"},"Semaphore proofs"),(0,n.kt)("p",null,"Learn how to use Semaphore to generate and verify zero-knowledge proofs."),(0,n.kt)("p",null,"Once a user joins their ",(0,n.kt)("a",{parentName:"p",href:"/docs/glossary#semaphore-identity"},"Semaphore identity")," to a ",(0,n.kt)("a",{parentName:"p",href:"/docs/glossary#semaphore-group"},"Semaphore group"),", the user can signal anonymously with a zero-knowledge proof that proves the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The user is a member of the group."),(0,n.kt)("li",{parentName:"ul"},"The same user created the signal and the proof.")),(0,n.kt)("p",null,"Developers can use Semaphore for the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#generate-a-proof-off-chain"},(0,n.kt)("strong",{parentName:"a"},"Generate a proof off-chain"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#verify-a-proof-off-chain"},(0,n.kt)("strong",{parentName:"a"},"Verify a proof off-chain"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#verify-a-proof-on-chain"},(0,n.kt)("strong",{parentName:"a"},"Verify a proof on-chain")))),(0,n.kt)("h2",{id:"generate-a-proof-off-chain"},"Generate a proof off-chain"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/proof"},(0,n.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/proof"))," library to generate an off-chain proof.\nTo generate a proof, pass the following properties to the ",(0,n.kt)("inlineCode",{parentName:"p"},"generateProof")," function:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"identity"),": The Semaphore identity of the user broadcasting the signal and generating the proof."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"group"),": The group to which the user belongs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"externalNullifier"),": The value that prevents double-signaling."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"signal"),": The signal the user wants to send anonymously."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"snarkArtifacts"),": The ",(0,n.kt)("inlineCode",{parentName:"li"},"zkey")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"wasm")," ",(0,n.kt)("a",{parentName:"li",href:"/docs/glossary/#trusted-setup-files"},"trusted setup files"),".")),(0,n.kt)("p",null,"In the voting system use case, once all the voters have joined their ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/identities#create-an-identity"},"identities")," to the ballot ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/groups"},"group"),",\na voter can generate a proof to vote for a proposal.\nIn the call to ",(0,n.kt)("inlineCode",{parentName:"p"},"generateProof"),", the voting system passes the unique ballot ID (the ",(0,n.kt)("a",{parentName:"p",href:"/docs/glossary/#merkle-tree/"},"Merkle tree")," root of the group) as the\n",(0,n.kt)("inlineCode",{parentName:"p"},"externalNullifier")," to prevent the voter signaling more than once for the ballot.\nThe following code sample shows how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"generateProof")," to generate the voting proof:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { generateProof } from "@semaphore-protocol/proof"\n\nconst externalNullifier = group.root\nconst signal = "proposal_1"\n\nconst fullProof = await generateProof(identity, group, externalNullifier, signal, {\n    zkeyFilePath: "./semaphore.zkey",\n    wasmFilePath: "./semaphore.wasm"\n})\n')),(0,n.kt)("h2",{id:"verify-a-proof-off-chain"},"Verify a proof off-chain"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/proof"},(0,n.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/proof"))," library to verify a Semaphore proof off-chain.\nTo verify a proof, pass the following to the ",(0,n.kt)("inlineCode",{parentName:"p"},"verifyProof")," function:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"proof")),": the Semaphore proof."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"verificationKey")),": the JavaScript object in the ",(0,n.kt)("inlineCode",{parentName:"li"},"semaphore.json")," ",(0,n.kt)("a",{parentName:"li",href:"/docs/glossary/#trusted-setup-files"},"trusted setup file"),".")),(0,n.kt)("p",null,"The following code sample shows how to parse the verification key object from ",(0,n.kt)("inlineCode",{parentName:"p"},"semaphore.json"),"\nand verify the previously generated proof:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { verifyProof } from "@semaphore-protocol/proof"\n\nconst verificationKey = JSON.parse(fs.readFileSync("./semaphore.json", "utf-8"))\n\nawait verifyProof(verificationKey, fullProof) // true or false.\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"verifyProof")," returns a Promise that resolves to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h2",{id:"verify-a-proof-on-chain"},"Verify a proof on-chain"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/contracts/contracts/base/SemaphoreCore.sol"},(0,n.kt)("inlineCode",{parentName:"a"},"SemaphoreCore"))," contract to verify proofs on-chain. It uses a verifier deployed to Ethereum and provides methods hash the signal and verify a proof."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"You can import ",(0,n.kt)("inlineCode",{parentName:"p"},"SemaphoreCore")," and other Semaphore contracts from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/contracts"},(0,n.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/contracts"))," NPM module."))),(0,n.kt)("p",null,"To verify Semaphore proofs in your contract, import ",(0,n.kt)("inlineCode",{parentName:"p"},"SemaphoreCore")," and pass the following to the ",(0,n.kt)("inlineCode",{parentName:"p"},"_verifyProof")," internal method:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"signal")),": The Semaphore signal to prove."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"root")),": The root of the Merkle tree."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"nullifierHash")),": a ",(0,n.kt)("a",{parentName:"li",href:"#retrieve-a-nullifier-hash"},"nullifier hash"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"externalNullifier")),": The external nullifier."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"proof")),": A ",(0,n.kt)("a",{parentName:"li",href:"#generate-a-solidity-compatible-proof"},(0,n.kt)("em",{parentName:"a"},"Solidity-compatible")," Semaphore proof"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"verifier")),": The verifier address.")),(0,n.kt)("p",null,"Remember to save the ",(0,n.kt)("inlineCode",{parentName:"p"},"nullifierHash")," on-chain to avoid double-signaling."),(0,n.kt)("p",null,"Alternatively, you can use an already deployed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/contracts/Semaphore.sol"},(0,n.kt)("inlineCode",{parentName:"a"},"Semaphore"))," contract and use its ",(0,n.kt)("inlineCode",{parentName:"p"},"verifiyProof")," external function."),(0,n.kt)("h3",{id:"generate-a-solidity-compatible-proof"},"Generate a Solidity-compatible proof"),(0,n.kt)("p",null,"To transform a proof to be compatible with Solidity contracts, pass the proof to the ",(0,n.kt)("inlineCode",{parentName:"p"},"packToSolidityProof")," utility function--for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { packToSolidityProof } from "@semaphore-protocol/proof"\n\nconst solidityProof = packToSolidityProof(fullProof.proof)\n')),(0,n.kt)("p",null,"Semaphore returns a new Solidity-compatible instance of the proof."),(0,n.kt)("h3",{id:"retrieve-a-nullifier-hash"},"Retrieve a nullifier hash"),(0,n.kt)("p",null,"To get the Semaphore proof nullifier hash, access the proof's ",(0,n.kt)("inlineCode",{parentName:"p"},"publicSignals.nullifierHash")," property--for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const { nullifierHash } = fullProof.publicSignals\n")))}h.isMDXComponent=!0}}]);