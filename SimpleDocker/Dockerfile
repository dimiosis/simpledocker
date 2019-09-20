FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["SimpleDocker/SimpleDocker.csproj", "SimpleDocker/"]
RUN dotnet restore "SimpleDocker/SimpleDocker.csproj"
COPY . .
WORKDIR "/src/SimpleDocker"
RUN dotnet build "SimpleDocker.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SimpleDocker.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SimpleDocker.dll"]