import { ref } from 'vue';

export function useModal() {
  const isOpen = ref(false); // Estado del modal

  // Función para abrir el modal
  const open = () => {
    isOpen.value = true;
  };

  // Función para cerrar el modal
  const close = () => {
    isOpen.value = false;
  };

  // Retorna las funciones y el estado del modal
  return {
    isOpen,
    open,
    close,
  };
}
