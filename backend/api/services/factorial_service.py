result_detail = []

def factorial_service(number: int) -> list:
    global result_detail
    result_detail = []
    
    if number < 0:
        raise ValueError("Number Invalid")
    elif not isinstance(number, int) != int:
        raise ValueError("Number is not integer")
    
    calculate_factorial(number)
    return result_detail
    
def calculate_factorial(number: int) -> int:    
    global result_detail
    result_detail.append(f"Chamando a Função com o número: {number}")
    if number == 0:
        result_detail.append(f"Função retornando o número 1 para o fatorial de 0")
        return 1
    else:
        result = number * calculate_factorial(number-1)
        result_detail.append(f"Função calculando: fatorial de {number} é {result }")
        return result