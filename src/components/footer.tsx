export function Footer() {
  return (
    <footer className="mb-20 lg:mb-0 w-full text-amber-950 dark:text-amber-50 text-center p-2">
      <p className="text-sm">
        © {new Date().getFullYear()} <strong>Bruno Félix</strong>. Todos os
        direitos reservados.
      </p>
      <p className="text-xs mt-1">
        Desenvolvido com ❤️ por tecnologias e inovação. 🚀
      </p>
    </footer>
  );
}
