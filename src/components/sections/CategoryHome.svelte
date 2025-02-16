<script>
	import gf from "@/assets/images/gf.jpg";
	import veggie from "@/assets/images/veggie.jpg";
</script>
<section class="categories-section">
	<div class="categories-container mt-8 py-4">
		<a class="category-card" href="/categorias/vegetarianos?catSku=9">
			<img src="{gf}" alt="Productos gluten free" class="category-image">
			<div class="category-info">
				<h3 class="category-title">Gluten Free</h3>
				<p class="category-description">Descubre nuestra selección de productos sin gluten, perfectos para celíacos y amantes de una dieta libre de gluten.</p>
			</div>
		</a>
		<a class="category-card"  href="/categorias/vegetarianos?catSku=9">
			<img src="{veggie}" alt="Productos vetetarianos / Veggie" class="category-image">
			<div class="category-info">
				<h3 class="category-title">Veggie</h3>
				<p class="category-description">Explora nuestra gama de productos vegetarianos y veganos, llenos de sabor y nutrientes para una alimentación consciente.</p>
			</div>
		</a>
	</div>
</section>
<style>

	.category-card img{
		object-fit: contain;
	}

	.categories-section {
		max-width: 1200px;
		margin: 40px auto;
		padding: 20px;
	}
	h2 {
		text-align: center;
		color: #333;
		margin-bottom: 30px;
	}
	.categories-container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.category-card {
		width: 45%;
		max-width: 500px;
		height: 300px;
		position: relative;
		/* overflow: hidden; */
		border-radius: 4px;
		box-shadow: 0 4px 8px rgba(0,0,0,0.1);
		margin-bottom: 20px;
	}
	.category-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.5s ease;
		filter: blur(2px);
	}
	.category-info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background-color: rgba(167, 139, 250, 0.1); */
		transition: all 0.5s ease;
		padding: 20px;
		box-sizing: border-box;
		border-radius: 4px;
	}
	.category-title {
		font-size: 24px;
		margin-bottom: 10px;
		/* color: violet; */
		text-align: center;
		transition: all 0.5s ease;
	}
	.category-description {
		text-align: center;
		margin-bottom: 15px;
		/* color: #5c5c5c; */
		transition: all 0.5s ease;
	}
	.category-card:hover .category-image {
		filter: blur(0);
		transform: translateY(-30%);
	}
	.category-card:hover .category-info {
		background-color: rgba(255, 255, 255, 0);
		transform: translateY(100%);
		height: 150px;
		/* max-height: 100px; */
		/* overflow: hidden; */
	}
	.category-card:hover .category-title {
		transform: translateY(10px) scale(0.9);
		color: #a78bfa;
	}
	.category-card:hover .category-description {
		transform: translateY(10px) scale(0.9);
		color: gray;
	}
	@media (max-width: 768px) {
		.category-card {
			width: 100%;
		}
	}

	@keyframes effectHover {
		/* filter: blur(0); */
		/* transform: translateY(-30%); */
		from {
			filter: blur(2px);
			transform: translateY(0%);
			opacity: 0;
			/* transform: translateY(30%); */
		}
		to {
			opacity: 1;
			/* transform: translateY(0); */
			filter: blur(0);
			transform: translateY(-30%);
		}
	}

	@keyframes unblur {
		from {
			filter: blur(2px);
			transform: translateY(30%);
		}
		to {
			filter: blur(0);
			transform: translateY(0);
		}
	}
	@keyframes titleHoverEffect {
		from {
			transform: translateY(0) scale(1);
			color: #a78bfa;
		}
		to {
			transform: translateY(10px) scale(0.9);
			color: #5c5c5c;
		}
	}
	@keyframes imageHoverEffect {
		from {
			filter: blur(2px);
			transform: translateY(0%);
		}
		to {
			filter: blur(0);
			transform: translateY(-30%);
		}
	}
	@keyframes infoHoverEffect {
		from {
			/* background-color: rgba(167, 139, 250, 0.0); */
			transform: translateY(0%);
			height: 100%;
		}
		to {
			/* background-color: rgba(255, 255, 255, 0); */
			transform: translateY(100%);
			height: 150px;
		}
	}
	@keyframes titleHoverEffect {
		from {
			transform: translateY(0) scale(1);
			color: #a78bfa;
		}
		to {
			transform: translateY(10px) scale(0.9);
			color: #5c5c5c;
		}
	}
	@keyframes descriptionHoverEffect {
		from {
			transform: translateY(0) scale(1);
			color: #5c5c5c;
		}
		to {
			transform: translateY(10px) scale(0.9);
			color: gray;
		}
	}

	/* Aplica la animación cuando el elemento entra en el viewport */
	/* .category-card {
		opacity: 0;
		animation: effectHover 0.8s ease-out forwards;
		animation-timeline: view();
		animation-range: entry 20% cover 50%;
	} */

	.category-image {
		animation: imageHoverEffect 0.8s ease-out forwards;
		animation-timeline: view();
		animation-range: entry 90% cover 100%;
	}
	.category-info {
		animation: infoHoverEffect 0.8s ease-out forwards;
		animation-timeline: view();
		animation-range: entry 60% cover 80%;
	}
	.category-title {
		animation: titleHoverEffect 0.8s ease-out forwards;
		animation-timeline: view();
		animation-range: entry 60% cover 100%;
		overflow: hidden;
	}
	.category-description{
		animation: descriptionHoverEffect 0.8s ease-out forwards;
		animation-timeline: view();
		animation-range: entry 20% cover 50%;
	}

	
	
</style>