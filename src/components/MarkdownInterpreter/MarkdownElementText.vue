<template>
	<span>{{ element.content }}</span>
</template>

<script>
	export default {
		props: {
			element: {
				type: Object,
				required: true
			}
		}
	}
</script>
