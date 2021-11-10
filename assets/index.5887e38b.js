import{j as l,r as d,R as p,a as u}from"./vendor.a53bfca9.js";const h=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};h();class f{constructor(o){this.password=o}hasLowerCaseLetter(){return/[a-z]/.test(this.password)}hasUpperCaseLetter(){return/[A-Z]/.test(this.password)}hasSpecialCharacter(){return/[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(this.password)}hasDigit(){return/\d/.test(this.password)}hasValidLength(){return this.password.length>=8}}var g="/Password_Validator/assets/open-eye.8d64cd16.svg",m="/Password_Validator/assets/closed-eye.f2a053e5.svg";const s=l.exports.jsx,c=l.exports.jsxs,w=l.exports.Fragment;function y({validator:t}){return c("ul",{children:[s("li",{style:{color:t.hasValidLength()?"green":"red"},children:"Minimum 8 characters"}),s("li",{style:{color:t.hasUpperCaseLetter()?"green":"red"},children:"One uppercase letter"}),s("li",{style:{color:t.hasLowerCaseLetter()?"green":"red"},children:"One lowercase letter"}),s("li",{style:{color:t.hasSpecialCharacter()?"green":"red"},children:"One special letter"}),s("li",{style:{color:t.hasDigit()?"green":"red"},children:"One number"})]})}function x(){const[t,o]=d.exports.useState(""),[a,n]=d.exports.useState(!1),e=new f(t);return s(w,{children:s("div",{className:"card",children:c("div",{class:"login-box",children:[s("h2",{children:"Password Validator"}),c("div",{className:"flex",children:[s("input",{type:a?"text":"password",placeholder:"Enter your password",onChange:r=>o(r.currentTarget.value)}),s("span",{onClick:()=>n(r=>!r),children:s("img",{src:a?m:g,alt:a?"Closed Eye":"Open Eye",width:"32px"})})]}),s(y,{validator:e})]})})})}p.render(s(u.StrictMode,{children:s(x,{})}),document.getElementById("root"));