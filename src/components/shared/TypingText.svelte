<script>
	export let text = ""
</script>

<div class="typewriter">
  { text }
</div>


<style>
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .12em solid lightgrey; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  /* letter-spacing: .15em; Adjust as needed */
  /* font-size: 4rem; */
  animation: typing 5s steps(40, end), blink-caret .75s step-end infinite;
  padding: 0 1em;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: lightgrey; }
}
</style>