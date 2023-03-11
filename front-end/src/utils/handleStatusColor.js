const handleStatusColor = (orderStatus) => {
  if (orderStatus === 'Pendente') {
    return { background: 'rgba(212, 198, 60, 1)' };
  }
  if (orderStatus === 'Preparando') {
    return { background: 'rgba(135, 213, 60, 1)' };
  }

  return { background: 'rgba(59, 213, 176, 1)' };
};

export default handleStatusColor;
