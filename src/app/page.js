export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">AlertaUrbana</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-blue-600">Características</a>
          <a href="#how" className="hover:text-blue-600">Cómo funciona</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Iniciar sesión
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Reporta huecos en las vías y mejora nuestra ciudad
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          AlertaUrbana es una plataforma que permite a los ciudadanos reportar
          huecos y daños en las calles para que las autoridades puedan actuar
          rápidamente y mejorar la movilidad.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100">
          Reportar un hueco
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Características de la plataforma
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">📍</div>
            <h4 className="font-semibold text-xl mb-2">Ubicación precisa</h4>
            <p>
              Los usuarios pueden marcar la ubicación exacta del hueco en el mapa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">📷</div>
            <h4 className="font-semibold text-xl mb-2">Evidencia fotográfica</h4>
            <p>
              Adjunta imágenes del daño en la vía para facilitar su identificación.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="font-semibold text-xl mb-2">Seguimiento</h4>
            <p>
              Los reportes pueden ser monitoreados hasta que sean solucionados.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gray-100 py-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          ¿Cómo funciona?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">

          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
            <p>Regístrate en la plataforma.</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <p>Reporta el hueco indicando ubicación y evidencia.</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <p>Las autoridades reciben el reporte y gestionan la reparación.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h3 className="text-3xl font-bold mb-6">
          Ayuda a mejorar las calles de tu ciudad
        </h3>
        <p className="mb-8">
          Cada reporte contribuye a una movilidad más segura para todos.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Crear mi primer reporte
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} AlertaUrbana - Proyecto de grado</p>
      </footer>

    </main>
  );
}
