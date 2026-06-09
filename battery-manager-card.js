/* Пример "всплывающего плюсика" при зарядке */
.battery-icon.charging::after {
  content: '+';
  position: absolute;
  color: var(--success-color, green);
  font-weight: bold;
  font-size: 14px;
  animation: floatUp 2s infinite ease-in;
}

@keyframes floatUp {
  0% {
    transform: translateY(10px) scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0;
  }
}
