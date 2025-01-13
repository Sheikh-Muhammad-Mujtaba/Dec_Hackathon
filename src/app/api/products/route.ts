import { productData, Review } from "./data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
    if (id) {
      if (!/^\d+$/.test(id)) {
        return new Response(JSON.stringify({ message: "Invalid ID format" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const project = productData.find((b) => b.id === parseInt(id, 10));
      if (project) {
        return new Response(JSON.stringify(project), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        });
      } else {
        return new Response(JSON.stringify({ message: "Project not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    const search = searchParams.get("search");
    let results = productData;
    if (search) {
      const sanitizedSearch = search.trim().toLowerCase().replace(/[<>;'"(){}[\]]/g, "");
      results = productData.filter((item) =>
        item.name.toLowerCase().includes(sanitizedSearch)
      );
    }

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(JSON.stringify({ message: "Invalid Content-Type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    const { id, name, review, rating } = body;

    // Input Validation
    if (!/^\d+$/.test(id)) {
      return new Response(JSON.stringify({ message: "Invalid ID format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (typeof name !== "string" || name.trim().length === 0) {
      return new Response(JSON.stringify({ message: "Invalid name" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (typeof review !== "string" || review.trim().length === 0) {
      return new Response(JSON.stringify({ message: "Invalid review content" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return new Response(JSON.stringify({ message: "Invalid rating" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const projectIndex = productData.findIndex((b) => b.id === parseInt(id, 10));
    if (projectIndex === -1) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const project = productData[projectIndex];

    // Add the review
    const newReviewId = project.Reviews.length > 0
      ? project.Reviews[project.Reviews.length - 1].id + 1
      : 1;

    const sanitizedReview: Review = {
      id: newReviewId,
      name: name.trim().replace(/[<>;'"(){}[\]]/g, ""),
      review: review.trim().replace(/[<>;'"(){}[\]]/g, ""),
      rating: Math.round(rating),
      date: new Date().toISOString(),
    };

    project.Reviews.push(sanitizedReview);

    return new Response(JSON.stringify({ message: "Review added successfully" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

