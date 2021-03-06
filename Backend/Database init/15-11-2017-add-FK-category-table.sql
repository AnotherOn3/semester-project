USE [AnotherOneMobileApp]
GO
ALTER TABLE [dbo].[Product_Category] DROP CONSTRAINT [FK_Product_Category_Product]
GO
ALTER TABLE [dbo].[Product_Category] DROP CONSTRAINT [FK_Product_Category_Category]
GO
ALTER TABLE [dbo].[Product] DROP CONSTRAINT [FK_Product_Store]
GO
/****** Object:  Table [dbo].[Store]    Script Date: 15.11.2017 г. 15:46:36 ******/
DROP TABLE [dbo].[Store]
GO
/****** Object:  Table [dbo].[Product_Category]    Script Date: 15.11.2017 г. 15:46:36 ******/
DROP TABLE [dbo].[Product_Category]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 15.11.2017 г. 15:46:36 ******/
DROP TABLE [dbo].[Product]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 15.11.2017 г. 15:46:36 ******/
DROP TABLE [dbo].[Category]
GO
USE [master]
GO
/****** Object:  Database [AnotherOneMobileApp]    Script Date: 15.11.2017 г. 15:46:36 ******/
DROP DATABASE [AnotherOneMobileApp]
GO
/****** Object:  Database [AnotherOneMobileApp]    Script Date: 15.11.2017 г. 15:46:36 ******/
CREATE DATABASE [AnotherOneMobileApp] ON  PRIMARY 
( NAME = N'AnotherOneMobileApp', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL10_50.SQLEXPRESS\MSSQL\DATA\AnotherOneMobileApp.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'AnotherOneMobileApp_log', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL10_50.SQLEXPRESS\MSSQL\DATA\AnotherOneMobileApp_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [AnotherOneMobileApp] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AnotherOneMobileApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AnotherOneMobileApp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET ARITHABORT OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AnotherOneMobileApp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AnotherOneMobileApp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET  DISABLE_BROKER 
GO
ALTER DATABASE [AnotherOneMobileApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AnotherOneMobileApp] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AnotherOneMobileApp] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [AnotherOneMobileApp] SET  MULTI_USER 
GO
ALTER DATABASE [AnotherOneMobileApp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AnotherOneMobileApp] SET DB_CHAINING OFF 
GO
USE [AnotherOneMobileApp]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 15.11.2017 г. 15:46:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Product]    Script Date: 15.11.2017 г. 15:46:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Picture] [nvarchar](50) NOT NULL,
	[Quantity] [decimal](18, 0) NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
	[StoreId] [int] NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Product_Category]    Script Date: 15.11.2017 г. 15:46:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product_Category](
	[ProductId] [int] NOT NULL,
	[CategoryId] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Store]    Script Date: 15.11.2017 г. 15:46:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Store](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Logo] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Store] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([Id], [Name]) VALUES (1, N'Vegetables')
INSERT [dbo].[Category] ([Id], [Name]) VALUES (2, N'Fruits')
INSERT [dbo].[Category] ([Id], [Name]) VALUES (3, N'Dairy')
INSERT [dbo].[Category] ([Id], [Name]) VALUES (4, N'Pastry')
INSERT [dbo].[Category] ([Id], [Name]) VALUES (5, N'Other')
SET IDENTITY_INSERT [dbo].[Category] OFF
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [Name], [Picture], [Quantity], [Type], [StoreId]) VALUES (1, N'Tomato', N'D://', CAST(1 AS Decimal(18, 0)), N'kg', 1)
INSERT [dbo].[Product] ([Id], [Name], [Picture], [Quantity], [Type], [StoreId]) VALUES (2, N'Banana', N'B://', CAST(1 AS Decimal(18, 0)), N'kg', 2)
INSERT [dbo].[Product] ([Id], [Name], [Picture], [Quantity], [Type], [StoreId]) VALUES (3, N'Potato', N'D://1', CAST(3 AS Decimal(18, 0)), N'kg', 1)
INSERT [dbo].[Product] ([Id], [Name], [Picture], [Quantity], [Type], [StoreId]) VALUES (4, N'Ketchup', N'C://2', CAST(1 AS Decimal(18, 0)), N'pcs', 4)
INSERT [dbo].[Product] ([Id], [Name], [Picture], [Quantity], [Type], [StoreId]) VALUES (5, N'Raw sauce', N'V://1', CAST(100 AS Decimal(18, 0)), N'g', 3)
SET IDENTITY_INSERT [dbo].[Product] OFF
INSERT [dbo].[Product_Category] ([ProductId], [CategoryId]) VALUES (1, 2)
INSERT [dbo].[Product_Category] ([ProductId], [CategoryId]) VALUES (2, 2)
INSERT [dbo].[Product_Category] ([ProductId], [CategoryId]) VALUES (3, 1)
INSERT [dbo].[Product_Category] ([ProductId], [CategoryId]) VALUES (4, 5)
INSERT [dbo].[Product_Category] ([ProductId], [CategoryId]) VALUES (5, 5)
SET IDENTITY_INSERT [dbo].[Store] ON 

INSERT [dbo].[Store] ([Id], [Name], [Logo]) VALUES (1, N'Netto', N'C://')
INSERT [dbo].[Store] ([Id], [Name], [Logo]) VALUES (2, N'Fakta', N'D://')
INSERT [dbo].[Store] ([Id], [Name], [Logo]) VALUES (3, N'Aldi', N'B://')
INSERT [dbo].[Store] ([Id], [Name], [Logo]) VALUES (4, N'Føtex', N'D://1')
SET IDENTITY_INSERT [dbo].[Store] OFF
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Store] FOREIGN KEY([StoreId])
REFERENCES [dbo].[Store] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_Store]
GO
ALTER TABLE [dbo].[Product_Category]  WITH CHECK ADD  CONSTRAINT [FK_Product_Category_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([Id])
GO
ALTER TABLE [dbo].[Product_Category] CHECK CONSTRAINT [FK_Product_Category_Category]
GO
ALTER TABLE [dbo].[Product_Category]  WITH CHECK ADD  CONSTRAINT [FK_Product_Category_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[Product_Category] CHECK CONSTRAINT [FK_Product_Category_Product]
GO
USE [master]
GO
ALTER DATABASE [AnotherOneMobileApp] SET  READ_WRITE 
GO
