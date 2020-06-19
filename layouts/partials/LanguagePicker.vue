<template>
	<a class="morphsearch__form navbar-item" @click="emitOpenLanguagePicker">
		<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.8846 14.2695C10.2692 12.6926 8.84615 11.308 8.03846 8.11567H13.6923V5.73106H8.07692V2.57721H5.65385V5.76952H0V8.15413H5.76923C5.76923 8.15413 5.73077 8.61567 5.65385 8.96182C4.84615 12.1157 3.88462 14.1157 0 16.0772L0.807692 18.4618C4.5 16.5003 6.42308 14.0387 7.26923 11.308C8.07692 13.3849 9.46154 15.0772 11.0385 16.6157L11.8846 14.2695Z" fill="#363636"/>
			<path d="M19.346 6.53839H16.1153L10.4614 22.423H12.8845L14.4999 17.6538H20.9614L22.5768 22.423H24.9999L19.346 6.53839ZM15.3076 15.2692L17.7307 8.92301L20.1537 15.3076L15.3076 15.2692Z" fill="#363636"/>
		</svg>
	</a>
</template>

<script>
    export default {
        name: "LanguagePicker",
		methods: {
        	emitOpenLanguagePicker() {
        		this.$emit('openLanguagePicker');
			}
		}
    }
</script>

<style scoped>

</style>
