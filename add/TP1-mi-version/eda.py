import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

#PUNTO 1
#Cargamos el dataset
df = pd.read_csv('dataset2.csv')

#PUNTO 2    
#Usamos info() para ver Dimensiones y  tipos de datos
print(df.info())
#Mostramos las primeras filas con head()
print(df.head())


#PUNTO 3
#Revisar valores nulos por columna
print("valores nulos: \n",df.isnull().sum())
#Transformar la columnas con nulos, 'Edad' e 'Ingreso', a su tipo adecuado si es posible para poder trabajar con ellas
df["Edad"] = pd.to_numeric(df["Edad"], errors='coerce')
df["Ingresos"] = pd.to_numeric(df["Ingresos"], errors='coerce')
#reemplazar valores nulos en 'Edad' e 'Ingresos' con la media y mediana respectivamente
df["Edad"] = df["Edad"].fillna(df["Edad"].mean())

df["Ingresos"] = df["Ingresos"].fillna(df["Ingresos"].median())

#PUNTO 4
#Revisar duplicados
print(f"Duplicados: {df.duplicated().sum()}")
#Eliminar duplicados
df = df.drop_duplicates()

#PUNTO 5
#Transformamos los valores de las columnas restantes su tipo adecuado
df["Nombre"] = df["Nombre"].astype(str)
df["Ciudad"] = df["Ciudad"].astype(str)
df["Ocupacion"] = df["Ocupacion"].astype(str)

#Verificar si hay valores nulos en las columnas string
print("valores nulos en columnas string: \n",df[['Nombre','Ciudad','Ocupacion']].isnull().sum())

#Verificar si hay valores 'nan' en las columnas string y reemplazarlos por 'Desconocido' o 'Anonimo'
print(f"df['Nombre']: {(df['Nombre'] == 'nan').sum()}, df['Ciudad']: {(df['Ciudad'] == 'nan').sum()},df['Ocupacion'], Ocupacion: {(df['Ocupacion'] == 'nan').sum()}")
# Como no detectamos valores 'nan' en las columnas string, no es necesario hacer el reemplazo
# pero si fuera necesario se haría de la siguiente manera:
# df["Nombre"].replace('nan', 'Anonimo')
# df["Ciudad"].replace('nan', 'Desconocido')
# df["Ocupacion"].replace('nan', 'Desconocido')


#PUNTO 6
#análisis descriptivo
print(df.describe())

print(df)

#PUNTO 7 
#grafico 1
#Gráfico de ingresos por ciudad
plt.figure(figsize=(10, 6))
sns.boxplot(x='Ciudad', y='Ingresos', data=df)
plt.title('Ingresos por Ciudad')
plt.xlabel('Ciudad')
plt.ylabel('Ingresos')
plt.show()

#grafico 2
#Gráfico de dispersión de Edad vs Ingresos
plt.figure(figsize=(10, 6))
sns.scatterplot(x='Edad', y='Ingresos', data=df)
plt.title('Edad vs Ingresos')
plt.xlabel('Edad')
plt.ylabel('Ingresos')
plt.show()
#grafico 3
#Histograma de Edad
plt.figure(figsize=(10, 6))
sns.histplot(df['Edad'], bins=20, kde=True)
plt.title('Distribución de Edad')
plt.xlabel('Edad')
plt.ylabel('Frecuencia')
plt.show()

