(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(9),c=n.n(l),r=(n(15),n(16),n(1)),i=n(7),d=n(2),u=n(3),s=n(6),m=n(5),p=n(4),f=n.n(p),h=function(e){var t=e.todo,n=e.changeComplete,a=e.deleteTodo,l=t.id,c=t.title,r=t.completed;return o.a.createElement("li",{className:f()({completed:r})},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",checked:r,id:l,onChange:function(e){return n(e.target.checked)}}),o.a.createElement("label",{htmlFor:l},c),o.a.createElement("button",{type:"button",className:"destroy",onClick:a})),o.a.createElement("input",{type:"text",className:"edit"}))},g=function(e){var t=e.todos,n=e.changeComplete,a=e.deleteTodo;return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement(h,{key:e.id,todo:e,changeComplete:function(t){return n(e.id,t)},deleteTodo:function(){return a(e.id)}})})))},b=function(e){var t=e.filterTypes,n=e.filterItem,a=e.filter;return o.a.createElement("ul",{className:"filters"},t.map((function(e){return o.a.createElement("li",{key:e},o.a.createElement("button",{type:"button",className:f()({selected:a===e}),"data-filter":e,onClick:function(e){return n(e.target.getAttribute("data-filter"))}},e))})))},E=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.handleChangeInput=function(t){e.setState({title:t.target.value})},e.changeId=function(){return Math.random()+1},e.handleSubmitTodo=function(t){if(t.preventDefault(),""!==e.state.title.replace(/\s/g,"")){var n={id:"".concat(e.changeId()),title:e.state.title,completed:!1};e.props.addTodo(n),e.setState({title:""})}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.title;return o.a.createElement("form",{onSubmit:this.handleSubmitTodo},o.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",name:e,value:e,onChange:this.handleChangeInput}))}}]),n}(o.a.Component),v=["All","Active","Completed"],C=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],filter:"All"},e.addTodo=function(t){var n=e.state.todos;e.setState((function(){return{todos:[].concat(Object(i.a)(n),[t])}}))},e.changeComplete=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}}))},e.filterItem=function(t){e.setState((function(){return{filter:t}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.clearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},e.pickAll=function(t){var n=t.target.checked;e.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:n})}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,a=t.filter((function(e){return!e.completed})),l=t.filter((function(e){return e.completed})),c=Object(i.a)(t);return"Active"===n&&(c=a),"Completed"===n&&(c=l),o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement(E,{addTodo:this.addTodo})),o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:t.length&&t.every((function(e){return e.completed})),onClick:this.pickAll}),t.length>0&&o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement(g,{todos:c,changeComplete:this.changeComplete,deleteTodo:this.deleteTodo})),t.length>0&&o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},"".concat(a.length," items left")),o.a.createElement(b,{filterItem:this.filterItem,filterTypes:v,filter:n}),o.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.clearCompleted},"Clear completed")))}}]),n}(o.a.Component);c.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d7f04a52.chunk.js.map