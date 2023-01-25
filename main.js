var app = new Vue({
  el: "#app",
  data: {
    message: "Bienvenido",
    nombres: "",
    apellidos: "",
    user: "",
    date: "",
    db: [],
    newDb: "",
    hoy: "",
    fechaNacimiento: "",
    edad: "",
    meses: "",
    id: "",
    seen: false,
  },

  computed: {},

  methods: {
    guardarDatos() {
      const verificarUsers = () => {
        const existeUser = this.db.find((user) => user.user === this.user);
        if (existeUser) {
          alert("El nombre de usuario ya existe, por favor ingrese otro");
          return false;
        } else {
          const calcularEdad = () => {
            this.hoy = new Date();
            this.fechaNacimiento = new Date(this.date);
            this.edad =
              this.hoy.getFullYear() - this.fechaNacimiento.getFullYear();
            this.meses = this.hoy.getMonth() - this.fechaNacimiento.getMonth();
            if (
              this.meses < 0 ||
              (this.meses === 0 &&
                this.hoy.getDate() < this.fechaNacimiento.getDate())
            ) {
              this.edad--;
            }
            console.log(this.edad);
            return this.edad;
          };

          const getId = () => {
            const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let chartRamdon = "";
            for (let i = 0; i < 4; i++) {
              chartRamdon += char.charAt(
                Math.floor(Math.random() * char.length)
              );
            }

            let numRamdon = Math.round(
              Math.random() * (9999 - 1000) + 1000
            ).toString();

            this.id = `${chartRamdon}${numRamdon}`;
          };

          getId();

          calcularEdad();
          this.db.push({
            nombres: this.nombres,
            apellidos: this.apellidos,
            nombreCompleto: `${this.nombres} ${this.apellidos}`,
            user: this.user,
            edad: `${this.edad} años`,
            id: this.id,
          });

          console.log(this.db);
        }
      };
      verificarUsers();
    },
  },
});
