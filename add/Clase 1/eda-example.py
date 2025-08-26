import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

#cargar el dataset sin especificar tipos
df = pd.read_csv('dataset1.csv')

#revisar info() y describe()
print(df.info())
print(df.describe())

#revisar valores nulos
print(df.isnull().sum())

#buscar duplicados
print(f"Duplicados: {df.duplicated().sum()}")
#eliminar duplicados
#df = df.drop_duplicates()

#ver cantidad de filas
print(f"Filas: {df.shape[0]}")

#conver columnas a tipo numerico si es posible
df["ingreso_mensual"] = df.to_numeric(df["ingreso_mensual"], errors='coerce')
# for col in df.columns:
#     df[col] = pd.to_numeric(df[col], errors='ignore')
#convertir la columna edad a tipo numerico si es posible
df["edad"] = pd.to_numeric(df["edad"], errors='coerce')
#reemplazar valores nulos del ingreso mensual con la mediana
df["ingreso_mensual"].fillna(df["ingreso_mensual"].median(), inplace=True)
# for col in df.select_dtypes(include=['float64', 'int64']).columns:
#     df[col].fillna(df[col].median(), inplace=True)

# reemplazar los valores nulos de la edad con la media
df["edad"].fillna(df["edad"].mean(), inplace=True)

#hacer ciuada y nombre de tipo string
df["ciudad"] = df["ciudad"].astype(str)
df["nombre"] = df["nombre"].astype(str)

#reemplazar los valores nan de nombre con anonimo
df["nombre"].replace('nan', 'Anonimo', inplace=True)

df["nombre"].fillna('Anonimo', inplace=True)

#Reemplazar los valores nan de ciudad string con desconocido

df["ciudad"].replace('nan', 'Desconocido', inplace=True)

df["ciudad"].fillna('Desconocido', inplace=True)


# for col in df.select_dtypes(include=['object']).columns:
#     df[col].fillna('Desconocido', inplace=True)

#hacer un grafico simple de ingreso mensual por ciudad
plt.figure(figsize=(10, 6))
sns.boxplot(x='ciudad', y='ingreso_mensual', data=df)   
plt.title('Ingreso Mensual por Ciudad')
plt.xlabel('Ciudad')
plt.ylabel('Ingreso Mensual')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

#crear figura con 2 graficos(subplots)
fig, axs = plt.subplots(1, 2, figsize=(15, 6))
#primer grafico: histograma de edad
sns.histplot(df['edad'], bins=20, kde=True, ax=axs[0])
axs[0].set_title('Distribución de Edad')
axs[0].set_xlabel('Edad')
axs[0].set_ylabel('Frecuencia')
#segundo grafico: barra de conteo de ciudad
sns.countplot(x='ciudad', data=df, ax=axs[1])
axs[1].set_title('Conteo por Ciudad')
axs[1].set_xlabel('Ciudad')
axs[1].set_ylabel('Conteo')
axs[1].tick_params(axis='x', rotation=45)
plt.tight_layout()
plt.show()
#realizar boxplot de ingreso mensual
plt.figure(figsize=(8, 6))
sns.boxplot(y='ingreso_mensual', data=df)
plt.title('Boxplot de Ingreso Mensual')
plt.ylabel('Ingreso Mensual')
plt.tight_layout()
plt.show()

