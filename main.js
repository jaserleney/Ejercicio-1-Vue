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
  },

  methods: {
    guardarDatos() {
      const calcularEdad = () => {
        this.hoy = new Date();
        this.fechaNacimiento = new Date(this.date);
        this.edad = this.hoy.getFullYear() - this.fechaNacimiento.getFullYear();
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
        this.id = Date.now().toString(30);
      };

      getId();

      calcularEdad();

      this.db.push({
        nombres: this.nombres,
        apellidos: this.apellidos,
        user: this.user,
        edad: this.edad,
        id: this.id,
      });

      console.log(this.db);
    },
  },
});
