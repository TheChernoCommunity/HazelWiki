<template>
	<br :v-repeat="element.content[0]">
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
