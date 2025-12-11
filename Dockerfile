# ============================
# 1. Build stage
# ============================
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy project file và restore
COPY *.csproj ./
RUN dotnet restore

# Copy toàn bộ source
COPY . ./

# Publish
RUN dotnet publish -c Release -o /app/publish


# ============================
# 2. Runtime stage
# ============================
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

# Copy từ stage build sang
COPY --from=build /app/publish .

# Render dùng biến môi trường PORT để expose
ENV ASPNETCORE_URLS=http://+:$PORT

# Run Blazor Server app
ENTRYPOINT ["dotnet", "web_blazor_server.dll"]
