<template>
    <b-container fluid>
        <b-row class="mt-4">
            <b-col>
                <h1>Formulario</h1>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col col="5">
                <b-breadcrumb :items="items"></b-breadcrumb>
                <div>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="formulario">
                        <b-form-group>
                            <b-form-label>
                                Marca de coche
                            </b-form-label>
                            <b-form-input id="marca" type="text" v-model="form.marca" required></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-label>
                                Modelo de coche
                            </b-form-label>
                            <b-form-input id="modelo" type="text" v-model="form.modelo" required></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-label>
                                Año de coche
                            </b-form-label>
                            <b-form-input id="fecha" v-model="value" type="text" placeholder="YYYY-MM-DD"
                                autocomplete="off"></b-form-input>
                            <b-input-group-append>
                                <b-form-datepicker v-model="value" button-only right locale="en-US"
                                    aria-controls="example-input" @context="onContext"></b-form-datepicker>
                            </b-input-group-append>
                        </b-form-group>


                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
  
<script>
export default {
    name: 'FormularioCarros',
    data() {
        return {


            items: [
                {
                    text: 'Menu',
                    href: 'menu',},
                {
                    text: 'Formulario',
                    active: true,
                }

            ],

            form: {
                email: '',
                fullName: '',
                address: {
                    postalCode: '',
                    street: '',
                    number: '',
                    city: '',
                },
                birthdate: '',
                phone: '',
                photo: null,
                value: '',
                file2: null,
            },
            show: true,
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(event) {
            event.preventDefault();
            this.form.email = '';
            this.form.name = '';
            this.form.address.postalCode = '';
            this.form.address.street = '';
            this.form.address.number = '';
            this.form.address.city = '';
            this.form.birthdate = '';
            this.form.phone = '';
            this.form.photo = null;

            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
        validateFullName() {
            const fullName = this.form.fullName.trim();
            const spaceIndex = fullName.lastIndexOf(' ');

            if (spaceIndex === -1 || fullName.slice(spaceIndex + 1).trim() === '') {
                this.$refs.inputFullname.setCustomValidity('Pon tu nonbre y primer apellido.');
            } else {
                this.$refs.inputFullname.setCustomValidity('');
            }
        },
        validateDate() {
            const currentDate = new Date();
            const selectedDate = new Date(this.value);

            if (selectedDate >= currentDate) {
                this.$refs.exampleInput.setCustomValidity('Please select a past date.');
            } else {
                this.$refs.exampleInput.setCustomValidity('');

                const eighteenYearsAgo = new Date();
                eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

                if (selectedDate > eighteenYearsAgo) {
                    this.$refs.exampleInput.setCustomValidity('Debes tener al menos 18 años.');
                } else {
                    this.$refs.exampleInput.setCustomValidity('');
                }
            }
        },
        validateFileSize() {
            const fileSizeInMB = this.file2 ? this.file2.size / (1024 * 1024) : 0;

            if (fileSizeInMB > 3) {
                this.$refs.inputPhoto.setCustomValidity('El tamaño del archivo debe ser menor de 3 MB.');
            } else {
                this.$refs.inputPhoto.setCustomValidity('');
            }
        }
    },
};
</script>
  
<style scoped>
.exito-mensaje {
    color: green;
    font-weight: bold;
}

#formulario {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 5px;
}
</style>
  